const { Client } = require("@notionhq/client");

module.exports = async (req, res) => {
    // Enable CORS for pre-flight options request or local dev testing
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    if (req.method !== "POST") {
        res.status(405).json({ error: "Method Not Allowed" });
        return;
    }

    const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env;

    if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
        res.status(500).json({ error: "Variables d'environnement NOTION_TOKEN ou NOTION_DATABASE_ID manquantes sur Vercel." });
        return;
    }

    try {
        const notion = new Client({ auth: NOTION_TOKEN });
        const audit = req.body;

        // Parse classification name mapping
        let starsLabel = "3 Étoiles";
        if (audit.hotel.etoiles === "5-luxury") {
            starsLabel = "Palace / Luxe";
        } else if (audit.hotel.etoiles === "5") {
            starsLabel = "5 Étoiles";
        } else if (audit.hotel.etoiles === "4") {
            starsLabel = "4 Étoiles";
        }

        // Helpers to safely compile and truncate category diagnostics text to fit Notion's 2000 char limits
        const getRubricSummary = (rubricKey) => {
            const rub = audit.rubriques[rubricKey];
            if (!rub || !rub.diagnostics) return "Aucune donnée";
            
            let text = `Maturité : ${rub.scoreMaturitePercent}%\n\n`;
            rub.diagnostics.forEach((d, idx) => {
                text += `[Q${idx + 1}] ${d.question}\n`;
                text += `Réponse: ${d.currentSituation}\n`;
                text += `Diagnostic: ${d.diagnosis}\n\n`;
            });
            return text.substring(0, 1990); // Truncate safely below 2000 char limit
        };

        // Create Page in Notion
        await notion.pages.create({
            parent: { database_id: NOTION_DATABASE_ID },
            properties: {
                "Hôtel": {
                    title: [{ text: { content: audit.hotel.nom || "Hôtel sans nom" } }]
                },
                "Auditeur": {
                    rich_text: [{ text: { content: audit.auditeur || "Non renseigné" } }]
                },
                "Classification": {
                    select: { name: starsLabel }
                },
                "Date": {
                    date: { start: audit.dateEvaluation || new Date().toISOString().split("T")[0] }
                },
                "Maturité Globale": {
                    number: audit.evaluationGlobal.scoreMaturiteGlobalPercent / 100
                },
                "Rapport Accueil": {
                    rich_text: [{ text: { content: getRubricSummary("reception") } }]
                },
                "Rapport Chambres": {
                    rich_text: [{ text: { content: getRubricSummary("rooms") } }]
                },
                "Rapport Restauration": {
                    rich_text: [{ text: { content: getRubricSummary("dining") } }]
                },
                "Rapport Wellness": {
                    rich_text: [{ text: { content: getRubricSummary("wellness") } }]
                },
                "Rapport Sécurité": {
                    rich_text: [{ text: { content: getRubricSummary("security") } }]
                }
            }
        });

        res.status(200).json({ success: true, message: "Audit enregistré dans Notion avec succès !" });
    } catch (error) {
        console.error("Notion Integration Error:", error);
        res.status(500).json({ error: "Erreur lors de la communication avec Notion.", details: error.message });
    }
};
