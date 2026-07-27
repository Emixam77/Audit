// --- DATA SYSTEM AND DETAILED BUSINESS RECOMMENDATIONS ---
const AUDIT_DATA = {
    reception: {
        title: "Accueil & Enregistrement",
        desc: "L'expérience d'arrivée et les interactions clients.",
        questions: [
            {
                id: "rec_checkin",
                text: "Comment vos clients effectuent-ils leur enregistrement (check-in) ?",
                suggestions: [
                    {
                        text: "Entièrement manuel au comptoir (identité, signatures, paiement à l'arrivée).",
                        score: 5, 
                        maturity: 20,
                        diagnosis: "Votre accueil est ralenti par des tâches administratives répétitives à faible valeur ajoutée.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Activez le pré-enregistrement en ligne (par SMS/Email 24h avant). <strong>Bénéfice :</strong> Supprimez les files d'attente à la réception, divisez par 4 le temps d'enregistrement et offrez un accueil personnalisé (boisson d'accueil, conseils) dès l'arrivée."
                    },
                    {
                        text: "Semi-manuel : ils remplissent un formulaire reçu par e-mail, que nous saisissons ensuite.",
                        score: 3, 
                        maturity: 60,
                        diagnosis: "Vous collectez des données en amont, mais le traitement manuel par vos équipes génère de la double saisie.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Intégrez votre formulaire directement à votre PMS (système hôtelier) via des API ou un portail sécurisé. <strong>Bénéfice :</strong> Gain moyen de 1.5 heure par jour pour vos réceptionnistes et élimination complète des erreurs de recopie."
                    },
                    {
                        text: "100% digitalisé : le client s'enregistre en ligne et récupère directement sa clé physique ou numérique.",
                        score: 1, 
                        maturity: 100,
                        diagnosis: "Processus d'arrivée moderne et fluide pour le voyageur autonome.",
                        upgradeTip: "<strong>Déjà optimal :</strong> Vous appliquez les meilleurs standards. Pour aller plus loin, vous pouvez personnaliser l'e-mail de confirmation avec des offres d'upsell ciblées automatiques (ex: petit-déjeuner à tarif réduit, départ tardif)."
                    }
                ]
            },
            {
                id: "rec_com",
                text: "Comment gérez-vous les demandes courantes des clients (serviettes, conciergerie) pendant leur séjour ?",
                suggestions: [
                    {
                        text: "Appels téléphoniques au standard interne ou déplacements physiques du client à la réception.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "Le téléphone sature votre accueil et interrompt constamment vos collaborateurs au comptoir.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Déployez un QR code unique en chambre redirigeant vers un compte WhatsApp Business officiel. <strong>Bénéfice :</strong> Vos clients formulent leurs demandes d'un clic sur leur propre messagerie, et un chatbot gère automatiquement 70% des réponses (codes Wi-Fi, horaires piscine, etc.)."
                    },
                    {
                        text: "Par messagerie (WhatsApp/SMS) gérée manuellement par l'équipe de réception.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "L'usage d'une messagerie plaît aux clients, mais l'absence de routage automatique fait perdre du temps à la réception.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Connectez votre canal WhatsApp à un gestionnaire de tickets collaboratif. <strong>Bénéfice :</strong> Les demandes de ménage ou de technique sont directement transmises aux équipes concernées sans passer par le réceptionniste."
                    },
                    {
                        text: "Via une application dédiée de l'hôtel ou une conciergerie virtuelle intégrée.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Vos interactions courantes sont structurées et dématérialisées.",
                        upgradeTip: "<strong>Excellent :</strong> Assurez-vous simplement que le taux d'adoption par les clients dépasse 60%. Pour ce faire, mettez en valeur ce canal dès l'e-mail de pré-enregistrement."
                    }
                ]
            }
        ]
    },
    rooms: {
        title: "Maintenance & Propreté",
        desc: "La coordination opérationnelle en chambre et les interventions techniques.",
        questions: [
            {
                id: "room_tech",
                text: "Comment un problème technique (ex: ampoule grillée, climatisation) est-il signalé et résolu ?",
                suggestions: [
                    {
                        text: "Le client appelle la réception, qui cherche ensuite le technicien (appel, SMS ou oralement).",
                        score: 5,
                        maturity: 20,
                        diagnosis: "La communication verbale des pannes crée des goulets d'étranglement et nuit à la traçabilité.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Donnez la possibilité de scanner un QR Code discret sous l'interrupteur pour déclarer un problème technique. <strong>Bénéfice :</strong> Alerte automatique instantanée sur le mobile du technicien. Le client est rassuré en temps réel et la réception ne gère plus l'intermédiaire."
                    },
                    {
                        text: "Saisie dans un registre papier ou fichier Excel partagé traité une fois par jour.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "Vous centralisez les pannes, mais le délai de traitement élevé risque de détériorer l'expérience client.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Utilisez un tableau Kanban simple et partagé en temps réel (type Trello/Notion). <strong>Bénéfice :</strong> Les chambres en panne sont bloquées et débloquées instantanément à la réception, éliminant les attributions de chambres défectueuses."
                    },
                    {
                        text: "Formulaire digital ou GMAO mobile : le technicien reçoit une notification push et valide la résolution d'un clic.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Gestion technique professionnelle, réactive et mesurable.",
                        upgradeTip: "<strong>Bravo :</strong> Analysez mensuellement les pannes récurrentes pour anticiper les investissements de renouvellement de matériel."
                    }
                ]
            },
            {
                id: "room_status",
                text: "Comment la gouvernante générale sait-elle qu'une chambre est prête pour l'attribution ?",
                suggestions: [
                    {
                        text: "Par appels talkie-walkie ou allers-retours physiques des équipes dans les étages.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "Ces allers-retours fatiguent vos équipes et retardent les arrivées anticipées (early check-in).",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Remplacez les talkies par une vue simplifiée sur tablette ou smartphone pour le staff d'étage. <strong>Bénéfice :</strong> Réduction drastique des nuisances sonores dans les couloirs et attribution immédiate de la chambre propre par la réception."
                    },
                    {
                        text: "Rapport papier collecté et mis à jour manuellement à la réception quelques fois par jour.",
                        score: 4,
                        maturity: 40,
                        diagnosis: "L'information circule par vagues, créant des frictions et de l'attente injustifiée pour les clients arrivant tôt.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Numérisez la feuille de route des gouvernantes. <strong>Bénéfice :</strong> Le statut de la chambre passe en 'propre' sur l'écran d'accueil dès la validation de la gouvernante."
                    },
                    {
                        text: "Chaque femme de chambre met à jour le statut sur sa tablette, synchronisé en direct avec le PMS.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Vos flux d'étages et d'attribution de chambres sont optimisés en temps réel.",
                        upgradeTip: "<strong>Excellent :</strong> Vous pouvez coupler ce système à l'envoi automatique d'un SMS ou e-mail au client pour l'informer que sa chambre est prête."
                    }
                ]
            }
        ]
    },
    dining: {
        title: "Restauration & Services",
        desc: "L'accès aux menus et le suivi de la satisfaction client.",
        questions: [
            {
                id: "dine_menu",
                text: "Comment vos clients consultent-ils vos cartes et commandent-ils au room service ?",
                suggestions: [
                    {
                        text: "Menus papier uniquement, commande passée exclusivement par téléphone ou en salle.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "La rigidité du format papier limite les ventes additionnelles et monopolise du temps de personnel.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Mettez en place un QR code sur table et en chambre menant à une carte digitale visuelle. <strong>Bénéfice :</strong> Augmentation constatée de 15% à 20% du panier moyen grâce à des photos attrayantes et un parcours d'achat facilité."
                    },
                    {
                        text: "Menu PDF consultable via QR code, mais commande par téléphone obligatoire.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "Le PDF évite l'impression papier, mais n'élimine pas l'étape de prise de commande manuelle au téléphone.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Ajoutez un module de paiement/commande en ligne simple sur votre carte digitale. <strong>Bénéfice :</strong> Encaissement automatisé et envoi de la commande directement en cuisine sans intermédiaire."
                    },
                    {
                        text: "QR code interactif avec commande et paiement en ligne automatisés.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Expérience moderne, libérant vos équipes pour le service client direct.",
                        upgradeTip: "<strong>Superbe :</strong> Pour valoriser votre service, ajoutez un suivi de commande en temps réel (ex: 'Votre commande est en préparation', 'Le serveur arrive')."
                    }
                ]
            },
            {
                id: "dine_reviews",
                text: "Comment collectez-vous les avis en ligne (Google, TripAdvisor) ?",
                suggestions: [
                    {
                        text: "Nous laissons les clients publier spontanément s'ils le désirent.",
                        score: 5,
                        maturity: 10,
                        diagnosis: "Sans sollicitation active, vous subissez les avis négatifs et manquez de visibilité positive.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Automatisez l'envoi d'un e-mail amical de remerciement 2 heures après le check-out, contenant un lien direct pour laisser 5 étoiles. <strong>Bénéfice :</strong> Multipliez par 3 vos avis Google positifs en 60 jours pour booster votre référencement local."
                    },
                    {
                        text: "Le personnel de réception demande verbalement aux clients lors du départ.",
                        score: 3,
                        maturity: 50,
                        diagnosis: "La demande orale est efficace, mais l'absence de lien direct fait que le client oublie rapidement une fois sorti.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Installez un mini-chevalet avec QR code sur le comptoir ou envoyez un lien direct par SMS automatique. <strong>Bénéfice :</strong> Le client dépose son avis en 10 secondes pendant que sa facture s'imprime."
                    },
                    {
                        text: "Envoi automatisé post-départ d'un questionnaire filtrant les mécontents en interne et redirigeant les satisfaits vers Google.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Stratégie d'e-réputation proactive et sécurisée.",
                        upgradeTip: "<strong>Parfait :</strong> Répondez systématiquement à tous vos avis, notamment positifs, pour consolider la confiance des futurs internautes."
                    }
                ]
            }
        ]
    },
    wellness: {
        title: "Espaces Communs & Spa",
        desc: "La gestion des créneaux de vos infrastructures et le suivi technique.",
        questions: [
            {
                id: "well_booking",
                text: "Comment gérez-vous la réservation des créneaux (piscine privatisable, spa, soins) ?",
                suggestions: [
                    {
                        text: "Prise de rendez-vous manuelle notée sur un cahier papier à l'accueil.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "Le cahier papier expose votre hôtel à des erreurs de double réservation et limite l'accès client en dehors des heures d'ouverture.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Intégrez un calendrier en ligne gratuit (type Calendly ou TidyCal). <strong>Bénéfice :</strong> Les clients réservent leur créneau de soin ou de spa en toute autonomie 24/7 depuis leur mobile, libérant du temps d'accueil."
                    },
                    {
                        text: "Demande par mail/téléphone, puis saisie dans un calendrier informatique partagé.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "Le calendrier informatique sécurise la saisie, mais le traitement des demandes par e-mail prend trop de temps.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Affichez les disponibilités en temps réel sur votre site web et bloquez instantanément les créneaux lors du paiement. <strong>Bénéfice :</strong> Zéro friction pour le client et aucun temps administratif."
                    },
                    {
                        text: "Portail de réservation en ligne synchronisé en direct avec le planning du staff et des équipements.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Gestion de planning optimisée au maximum.",
                        upgradeTip: "<strong>Excellent :</strong> Ajoutez des rappels automatiques par SMS/e-mail 2 heures avant le soin pour réduire le taux de rendez-vous manqués."
                    }
                ]
            },
            {
                id: "well_logs",
                text: "Comment consignez-vous les relevés obligatoires de qualité de l'eau (piscine/jacuzzi) ?",
                suggestions: [
                    {
                        text: "Le technicien note les valeurs (pH, chlore, température) sur un registre papier physique.",
                        score: 4,
                        maturity: 30,
                        diagnosis: "Le registre papier complique le suivi historique et expose à des oublis ou des pertes de documents.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Remplacez le cahier par un formulaire Google Forms ou Tally accessible sur mobile. <strong>Bénéfice :</strong> Archivage automatique et sécurisé sur un cloud, consultable en 1 clic en cas d'inspection sanitaire."
                    },
                    {
                        text: "Saisie périodique manuelle des relevés papier dans un fichier informatique central.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "Double travail : le technicien écrit sur le papier puis recopie sur l'ordinateur.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Mettez en place une alerte automatique par e-mail si un technicien oublie de soumettre son relevé quotidien. <strong>Bénéfice :</strong> Garantie de conformité légale constante."
                    },
                    {
                        text: "Sondes connectées avec transmission en temps réel et alertes SMS automatiques en cas de déviation.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Sécurité et conformité optimales grâce aux objets connectés (IoT).",
                        upgradeTip: "<strong>Parfait :</strong> Pensez à planifier un étalonnage régulier des sondes pour garantir la précision des relevés automatiques."
                    }
                ]
            }
        ]
    },
    security: {
        title: "Sécurité & Organisation",
        desc: "Contrôles réglementaires et transmission interne des consignes.",
        questions: [
            {
                id: "sec_alerts",
                text: "Comment suivez-vous les échéances de maintenance réglementaire (sécurité incendie, hottes, ascenseurs) ?",
                suggestions: [
                    {
                        text: "Vérification visuelle de temps en temps dans les classeurs de sécurité.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "Méthode risquée. Un oubli de contrôle expose l'établissement à des sanctions et à la suspension des assurances.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Programmez des rappels automatiques récurrents dans Google Calendar ou Microsoft Outlook. <strong>Bénéfice :</strong> Planification automatique des visites des organismes de contrôle 2 mois avant l'échéance."
                    },
                    {
                        text: "Tableau Excel de suivi mis à jour de manière irrégulière sans alertes automatiques.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "Le tableau Excel centralise l'information, mais il nécessite de penser à l'ouvrir régulièrement pour vérifier.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Associez votre tableau à un outil de rappels par e-mail. <strong>Bénéfice :</strong> Réception d'alertes automatiques directement dans votre boîte mail dès qu'une date approche."
                    },
                    {
                        text: "Logiciel de GMAO ou calendrier de tâches automatisé avec rappels e-mails récurrents.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Gestion technique structurée et sans stress.",
                        upgradeTip: "<strong>Excellent :</strong> Renseignez les coordonnées des prestataires directement dans les tâches automatiques pour gagner du temps lors de la prise de contact."
                    }
                ]
            },
            {
                id: "sec_shift",
                text: "Comment passez-vous les consignes importantes entre les équipes du matin et du soir ?",
                suggestions: [
                    {
                        text: "Un cahier de consignes papier à la réception ou de simples briefings oraux.",
                        score: 5,
                        maturity: 20,
                        diagnosis: "Les informations écrites à la main se perdent facilement et les consignes orales s'oublient d'un shift à l'autre.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Créez un canal Slack ou un groupe professionnel Teams gratuit dédié aux transmissions. <strong>Bénéfice :</strong> Historique complet consultable par mots-clés, traçabilité des consignes urgentes et communication instantanée."
                    },
                    {
                        text: "Par e-mails individuels ou via des groupes WhatsApp personnels.",
                        score: 3,
                        maturity: 60,
                        diagnosis: "WhatsApp est pratique mais mélange la vie personnelle et professionnelle des salariés, et rend difficile la recherche d'une ancienne consigne.",
                        upgradeTip: "<strong>Opportunité d'upgrade :</strong> Utilisez un tableau Notion simple et collaboratif structuré par dates de passage. <strong>Bénéfice :</strong> Visualisation claire des tâches résolues et de celles à transférer au shift suivant."
                    },
                    {
                        text: "Outil collaboratif hôtelier dédié avec obligation d'émarger et de valider la lecture des consignes.",
                        score: 1,
                        maturity: 100,
                        diagnosis: "Rigueur opérationnelle optimale.",
                        upgradeTip: "<strong>Bravo :</strong> C'est la méthode la plus sûre pour maintenir des standards de service élevés dans les établissements haut de gamme."
                    }
                ]
            }
        ]
    }
};

// --- NAVIGATION CONFIG ---
const CATEGORIES = Object.keys(AUDIT_DATA);
let currentQuestionIndex = -1; // -1 = Welcome Screen
const userAnswers = {};

// Flattened Questions
const flatQuestions = [];
CATEGORIES.forEach(cat => {
    AUDIT_DATA[cat].questions.forEach(q => {
        flatQuestions.push({
            ...q,
            categoryKey: cat,
            categoryTitle: AUDIT_DATA[cat].title
        });
    });
});

const TOTAL_SLIDES = flatQuestions.length + 2; // Welcome + Questions + Summary

// --- DOM ELEMENTS ---
const elements = {
    progressBar: document.getElementById("main-progress-bar"),
    stepBadge: document.getElementById("step-badge"),
    secIntro: document.getElementById("sec-intro"),
    secQuestions: document.getElementById("sec-questions"),
    secSummary: document.getElementById("sec-summary"),
    qWrapper: document.getElementById("active-question-wrapper"),
    
    // Controls
    btnStart: document.getElementById("btn-start"),
    ctrlPrev: document.getElementById("ctrl-prev"),
    ctrlNext: document.getElementById("ctrl-next"),
    
    // Inputs Intro
    hotelName: document.getElementById("hotel-name"),
    hotelStars: document.getElementById("hotel-stars"),
    auditorName: document.getElementById("auditor-name"),
    
    // Submit action Notion API
    btnSubmitNotion: document.getElementById("btn-submit-notion"),
    
    // Summary
    summaryHotelTitle: document.getElementById("summary-hotel-title"),
    chartContainer: document.getElementById("chart-bars-container"),
    recommendationsContainer: document.getElementById("recommendations-container"),
    
    // Actions & JSON
    btnShowJson: document.getElementById("btn-show-json"),
    jsonWrapper: document.getElementById("json-wrapper"),
    jsonPreview: document.getElementById("json-preview"),
    btnCopyJson: document.getElementById("btn-copy-json"),
    btnDownloadJson: document.getElementById("btn-download-json"),
    btnPrintPdf: document.getElementById("btn-print-pdf"),
    
    // Modal Success
    successModal: document.getElementById("success-modal"),
    successIconContainer: document.getElementById("success-icon-container"),
    modalTitle: document.getElementById("modal-title"),
    modalText: document.getElementById("modal-text"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    
    // Print fields
    printHotelName: document.getElementById("print-hotel-name"),
    printStars: document.getElementById("print-stars"),
    printAuditor: document.getElementById("print-auditor"),
    printDate: document.getElementById("print-date")
};

// --- SLIDE NAV ENGINE ---
function goToSlide(index) {
    if (index < -1 || index > flatQuestions.length) return;
    
    // Validation on transition from Intro to first question
    if (currentQuestionIndex === -1 && index === 0) {
        if (!elements.hotelName.value.trim() || !elements.auditorName.value.trim()) {
            elements.hotelName.reportValidity();
            elements.auditorName.reportValidity();
            return;
        }
    }

    // Deactivate current slide
    const activeSection = getActiveSectionElement();
    if (activeSection) {
        activeSection.classList.remove("active");
    }

    currentQuestionIndex = index;
    
    // Trigger transition
    setTimeout(() => {
        elements.secIntro.classList.remove("active");
        elements.secQuestions.classList.remove("active");
        elements.secSummary.classList.remove("active");

        if (currentQuestionIndex === -1) {
            elements.secIntro.classList.add("active");
        } else if (currentQuestionIndex === flatQuestions.length) {
            generateSummary();
            elements.secSummary.classList.add("active");
        } else {
            renderQuestion(currentQuestionIndex);
            elements.secQuestions.classList.add("active");
        }

        updateProgress();
    }, 50);
}

function getActiveSectionElement() {
    if (currentQuestionIndex === -1) return elements.secIntro;
    if (currentQuestionIndex === flatQuestions.length) return elements.secSummary;
    return elements.secQuestions;
}

function updateProgress() {
    const slideNumber = currentQuestionIndex + 2; 
    const percent = Math.round(((slideNumber - 1) / (TOTAL_SLIDES - 1)) * 100);
    elements.progressBar.style.width = `${percent}%`;
    
    elements.stepBadge.textContent = `${slideNumber} / ${TOTAL_SLIDES}`;

    elements.ctrlPrev.disabled = currentQuestionIndex === -1;
    elements.ctrlNext.disabled = currentQuestionIndex === flatQuestions.length;
}

// --- RENDER DYNAMIC QUESTION ---
function renderQuestion(qIndex) {
    const q = flatQuestions[qIndex];
    const savedAnswer = userAnswers[q.id] || {};
    const alphabet = ["A", "B", "C", "D"];

    let choicesHtml = q.suggestions.map((s, idx) => {
        const isSelected = savedAnswer.isCustom === false && savedAnswer.value === s.text;
        return `
            <button type="button" class="choice-btn ${isSelected ? 'selected' : ''}" 
                onclick="selectChoice(${qIndex}, \`${s.text.replace(/"/g, '&quot;')}\`, ${s.score}, ${s.maturity}, \`${s.diagnosis.replace(/"/g, '&quot;')}\`, \`${s.upgradeTip.replace(/"/g, '&quot;')}\`, this)">
                <span class="choice-letter">${alphabet[idx]}</span>
                <span class="choice-text">${s.text}</span>
            </button>
        `;
    }).join("");

    const isCustomSelected = savedAnswer.isCustom === true;
    const customValue = isCustomSelected ? savedAnswer.value : "";

    choicesHtml += `
        <button type="button" class="choice-btn ${isCustomSelected ? 'selected' : ''}" 
            onclick="toggleCustomInput(${qIndex}, this)">
            <span class="choice-letter">Autre</span>
            <span class="choice-text">Autre (saisie libre)</span>
        </button>
    `;

    elements.qWrapper.innerHTML = `
        <span class="category-indicator">${q.categoryTitle}</span>
        <h3 class="question-text-title">${q.text}</h3>
        
        <div class="choices-list">
            ${choicesHtml}
        </div>

        <div class="textarea-wrapper ${isCustomSelected ? 'active' : ''}" id="textarea-wrap-${q.id}">
            <textarea placeholder="Saisissez votre réponse ici..." 
                oninput="handleCustomInput('${q.id}', this)">${customValue}</textarea>
            <span class="other-hint">Appuyez sur Entrée ou sur le bouton Suivant une fois votre saisie complétée.</span>
        </div>
    `;
}

// --- SELECTION ACTIONS ---
window.selectChoice = function(qIndex, text, score, maturity, diagnosis, upgradeTip, btnElement) {
    const q = flatQuestions[qIndex];
    
    const list = btnElement.parentNode;
    list.querySelectorAll(".choice-btn").forEach(btn => btn.classList.remove("selected"));
    btnElement.classList.add("selected");

    const wrap = document.getElementById(`textarea-wrap-${q.id}`);
    if (wrap) {
        wrap.classList.remove("active");
        wrap.querySelector("textarea").value = "";
    }

    userAnswers[q.id] = {
        value: text,
        isCustom: false,
        score: score,
        maturity: maturity,
        diagnosis: diagnosis,
        recommendation: upgradeTip
    };

    // Auto advance
    setTimeout(() => {
        goToSlide(currentQuestionIndex + 1);
    }, 350);
};

window.toggleCustomInput = function(qIndex, btnElement) {
    const q = flatQuestions[qIndex];
    const list = btnElement.parentNode;
    const wrap = document.getElementById(`textarea-wrap-${q.id}`);
    const textarea = wrap.querySelector("textarea");

    if (btnElement.classList.contains("selected")) {
        btnElement.classList.remove("selected");
        wrap.classList.remove("active");
        textarea.value = "";
        delete userAnswers[q.id];
    } else {
        list.querySelectorAll(".choice-btn").forEach(btn => btn.classList.remove("selected"));
        btnElement.classList.add("selected");
        wrap.classList.add("active");
        textarea.focus();

        userAnswers[q.id] = {
            value: textarea.value,
            isCustom: true,
            score: 5,
            maturity: 15, 
            diagnosis: "Processus sur-mesure non standardisé.",
            recommendation: "<strong>Recommandation personnalisée :</strong> Une analyse de vos workflows spécifiques est nécessaire pour identifier les outils d'automatisation (API, Webhooks) connectables à votre PMS actuel."
        };
    }
};

window.handleCustomInput = function(questionId, textarea) {
    if (userAnswers[questionId]) {
        userAnswers[questionId].value = textarea.value;
    }
};

// --- GENERATE DIAGNOSTIC REPORT CARD ---
let latestReportJSON = {};

function generateSummary() {
    const hotelNameVal = elements.hotelName.value;
    const starsVal = elements.hotelStars.value;
    const auditorVal = elements.auditorName.value;
    
    elements.summaryHotelTitle.textContent = `Diagnostic pour l'établissement : ${hotelNameVal}`;
    
    // Fill Print-only metadata
    elements.printHotelName.textContent = hotelNameVal;
    elements.printStars.textContent = starsVal === "5-luxury" ? "Palace / Luxe" : `${starsVal} Étoiles`;
    elements.printAuditor.textContent = auditorVal;
    elements.printDate.textContent = new Date().toLocaleDateString('fr-FR');

    elements.chartContainer.innerHTML = "";
    elements.recommendationsContainer.innerHTML = "";

    const jsonReportDetails = {};
    let totalScoreSum = 0;
    let categoryCount = 0;

    CATEGORIES.forEach(catKey => {
        const catData = AUDIT_DATA[catKey];
        let totalMaturity = 0;
        let answeredQuestionsCount = 0;

        const catReports = [];

        catData.questions.forEach(q => {
            const ans = userAnswers[q.id];
            if (ans) {
                totalMaturity += ans.maturity;
                answeredQuestionsCount++;
                catReports.push({
                    questionId: q.id,
                    question: q.text,
                    currentSituation: ans.value,
                    diagnosis: ans.diagnosis,
                    recommendation: ans.recommendation,
                    scoreMaturite: ans.maturity
                });
            }
        });

        const categoryMaturity = answeredQuestionsCount > 0 ? Math.round(totalMaturity / answeredQuestionsCount) : 0;
        totalScoreSum += categoryMaturity;
        categoryCount++;

        let colorClass = "danger";
        let labelMaturity = "Faible";
        if (categoryMaturity >= 70) {
            colorClass = "success";
            labelMaturity = "Excellente";
        } else if (categoryMaturity >= 40) {
            colorClass = "warning";
            labelMaturity = "Moyenne";
        }

        // Render chart bar
        const barRow = document.createElement("div");
        barRow.className = "bar-row";
        barRow.innerHTML = `
            <span class="bar-label">${catData.title}</span>
            <div class="bar-track">
                <div class="bar-fill ${colorClass}" style="width: ${categoryMaturity}%"></div>
            </div>
            <span class="bar-percentage">${categoryMaturity}%</span>
        `;
        elements.chartContainer.appendChild(barRow);

        // Render rubric recommendations card
        const rubricCard = document.createElement("div");
        rubricCard.className = "rubric-report-card";
        
        let detailedAdviceHtml = catReports.map(rep => `
            <div style="margin-bottom: 1.25rem;">
                <p class="rubric-current-situation"><strong>Situation actuelle :</strong> ${rep.currentSituation}</p>
                <p style="font-size: 0.95rem; color: #ef4444; margin-bottom: 0.25rem;">⚠️ ${rep.diagnosis}</p>
                <p class="rubric-upgrade-text">${rep.recommendation}</p>
            </div>
        `).join("");

        rubricCard.innerHTML = `
            <h4>
                <span>${catData.title}</span>
                <span class="rubric-maturity-badge ${categoryMaturity >= 70 ? 'high' : (categoryMaturity >= 40 ? 'medium' : 'low')}">
                    Maturité ${labelMaturity}
                </span>
            </h4>
            <div style="margin-top: 1rem;">
                ${detailedAdviceHtml}
            </div>
        `;
        elements.recommendationsContainer.appendChild(rubricCard);

        jsonReportDetails[catKey] = {
            rubrique: catData.title,
            scoreMaturitePercent: categoryMaturity,
            diagnostics: catReports
        };
    });

    const averageGlobalMaturity = categoryCount > 0 ? Math.round(totalScoreSum / categoryCount) : 0;

    // Build the payload
    latestReportJSON = {
        rapportId: `REP-OPT-${Math.floor(100000 + Math.random() * 900000)}`,
        dateEvaluation: new Date().toISOString().split('T')[0],
        auditeur: auditorVal,
        hotel: {
            nom: hotelNameVal,
            etoiles: starsVal,
        },
        evaluationGlobal: {
            scoreMaturiteGlobalPercent: averageGlobalMaturity,
            statutMaturite: averageGlobalMaturity >= 70 ? "Hautement automatisé" : (averageGlobalMaturity >= 40 ? "Modérément automatisé" : "Entièrement manuel / Priorité critique d'optimisation")
        },
        rubriques: jsonReportDetails
    };

    elements.jsonPreview.textContent = JSON.stringify(latestReportJSON, null, 4);
}

// --- SUBMIT TO NOTION API (VIA VERCEL SERVERLESS FUNCTION) ---
elements.btnSubmitNotion.addEventListener("click", () => {
    elements.btnSubmitNotion.disabled = true;
    elements.btnSubmitNotion.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Envoi vers Notion...`;

    // Fetch call directly to the Vercel API endpoint
    fetch("/api/submit-audit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(latestReportJSON)
    })
    .then(response => {
        elements.btnSubmitNotion.disabled = false;
        elements.btnSubmitNotion.innerHTML = `Enregistrer dans votre Notion <span class="btn-kbd"><i class="fa-solid fa-paper-plane"></i></span>`;

        if (response.ok) {
            elements.successIconContainer.className = "success-icon-animation success";
            elements.successIconContainer.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            elements.modalTitle.textContent = "Diagnostic Enregistré !";
            elements.modalText.textContent = "Les données de l'audit ont été enregistrées avec succès dans votre espace Notion.";
            elements.successModal.classList.add("active");
        } else {
            return response.json().then(errData => {
                throw new Error(errData.error || "Réponse serveur incorrecte.");
            });
        }
    })
    .catch(err => {
        elements.btnSubmitNotion.disabled = false;
        elements.btnSubmitNotion.innerHTML = `Enregistrer dans votre Notion <span class="btn-kbd"><i class="fa-solid fa-paper-plane"></i></span>`;

        // Setup Error Modal
        elements.successIconContainer.className = "success-icon-animation error";
        elements.successIconContainer.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        elements.modalTitle.textContent = "Échec de l'enregistrement";
        elements.modalText.textContent = `Erreur : ${err.message}. Veuillez vérifier que vos variables d'environnement NOTION_TOKEN et NOTION_DATABASE_ID sont correctement définies sur Vercel.`;
        elements.successModal.classList.add("active");
    });
});

// --- CONTROLS AND OTHER EVENTS ---
elements.btnStart.addEventListener("click", () => goToSlide(0));

elements.ctrlPrev.addEventListener("click", () => {
    if (currentQuestionIndex > -1) goToSlide(currentQuestionIndex - 1);
});

elements.ctrlNext.addEventListener("click", () => {
    if (currentQuestionIndex < flatQuestions.length) goToSlide(currentQuestionIndex + 1);
});

// JSON Show panel toggle
elements.btnShowJson.addEventListener("click", () => {
    const isVisible = elements.jsonWrapper.style.display === "block";
    elements.jsonWrapper.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
        elements.jsonWrapper.scrollIntoView({ behavior: 'smooth' });
    }
});

// Copy JSON
elements.btnCopyJson.addEventListener("click", () => {
    navigator.clipboard.writeText(elements.jsonPreview.textContent).then(() => {
        elements.btnCopyJson.innerHTML = `<i class="fa-solid fa-check" style="color: var(--success)"></i> Copié`;
        setTimeout(() => {
            elements.btnCopyJson.innerHTML = `<i class="fa-regular fa-copy"></i> Copier`;
        }, 2000);
    });
});

// Download JSON
elements.btnDownloadJson.addEventListener("click", () => {
    const blob = new Blob([elements.jsonPreview.textContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rapport-${elements.hotelName.value.toLowerCase().replace(/[^a-z0-9]/g, "-")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Print PDF Trigger
elements.btnPrintPdf.addEventListener("click", () => {
    window.print();
});

elements.btnCloseModal.addEventListener("click", () => {
    elements.successModal.classList.remove("active");
    // Only reset if it was a success submission
    if (elements.successIconContainer.classList.contains("success")) {
        elements.hotelName.value = "";
        elements.auditorName.value = "";
        Object.keys(userAnswers).forEach(key => delete userAnswers[key]);
        goToSlide(-1);
    }
});

// Keyboard triggers (Typeform standard behavior)
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            if (currentQuestionIndex === -1) {
                goToSlide(0);
            } else if (currentQuestionIndex < flatQuestions.length) {
                const q = flatQuestions[currentQuestionIndex];
                if (userAnswers[q.id]) {
                    goToSlide(currentQuestionIndex + 1);
                }
            }
        }
    }
    
    if (e.key === "ArrowUp") {
        if (currentQuestionIndex > -1) {
            goToSlide(currentQuestionIndex - 1);
        }
    }
    
    if (e.key === "ArrowDown") {
        if (currentQuestionIndex < flatQuestions.length) {
            goToSlide(currentQuestionIndex + 1);
        }
    }

    // A, B, C selection keys
    if (currentQuestionIndex >= 0 && currentQuestionIndex < flatQuestions.length) {
        const key = e.key.toUpperCase();
        const letterIdx = ["A", "B", "C"].indexOf(key);
        if (letterIdx !== -1) {
            const btns = document.querySelectorAll(".choices-list .choice-btn");
            if (btns[letterIdx]) {
                btns[letterIdx].click();
            }
        }
    }
});

// Kickstart
goToSlide(-1);
