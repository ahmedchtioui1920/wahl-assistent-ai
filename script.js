// Parteien-Daten (deutsche Parteien)
const parties = [
    {
        id: 1,
        name: "CDU/CSU",
        description: "Die Christlich Demokratische Union Deutschlands und die Christlich-Soziale Union in Bayern setzen sich für soziale Marktwirtschaft, Familie und Sicherheit ein.",
        topics: ["Wirtschaft", "Sicherheit", "Familie", "Europa"],
        color: "#000000",
        website: "https://www.cdu.de"
    },
    {
        id: 2,
        name: "SPD",
        description: "Die Sozialdemokratische Partei Deutschlands steht für soziale Gerechtigkeit, solidarische Gesellschaft und Arbeitnehmerrechte.",
        topics: ["Soziales", "Arbeit", "Gerechtigkeit", "Rente"],
        color: "#e3000f",
        website: "https://www.spd.de"
    },
    {
        id: 3,
        name: "Bündnis 90/Die Grünen",
        description: "Die Grünen fokussieren auf Klimaschutz, ökologische Modernisierung und gesellschaftliche Freiheiten.",
        topics: ["Klima", "Umwelt", "Europäische Integration", "Bildung"],
        color: "#64a12d",
        website: "https://www.gruene.de"
    },
    {
        id: 4,
        name: "FDP",
        description: "Die Freie Demokratische Partei setzt auf Bürgerrechte, digitale Freiheit und wirtschaftliche Liberalisierung.",
        topics: ["Digitalisierung", "Bürgerrechte", "Wirtschaft", "Innovation"],
        color: "#ffed00",
        website: "https://www.fdp.de"
    }
];

// DOM-Elemente
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const partiesContainer = document.getElementById('partiesContainer');

// Initialisiere die Parteien-Karten
function initializePartyCards() {
    partiesContainer.innerHTML = '';
    
    parties.forEach(party => {
        const partyCard = document.createElement('div');
        partyCard.className = `party-card party-${party.id}`;
        
        partyCard.innerHTML = `
            <div class="party-header">
                <div class="party-logo">${party.name.substring(0, 2)}</div>
                <div class="party-name">${party.name}</div>
            </div>
            <div class="party-info">${party.description}</div>
            <div class="party-topics">
                ${party.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
            <a href="${party.website}" class="party-link" target="_blank">Mehr erfahren →</a>
        `;
        
        partiesContainer.appendChild(partyCard);
    });
}

// Nachricht zum Chat hinzufügen
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    // Prüfen, ob die Nachricht Quick Replies enthält
    if (!isUser && message.includes('Wählen Sie eine Partei')) {
        messageDiv.innerHTML = `
            ${message}
            <div class="quick-replies">
                <button class="quick-reply" data-party="1">CDU/CSU</button>
                <button class="quick-reply" data-party="2">SPD</button>
                <button class="quick-reply" data-party="3">Grüne</button>
                <button class="quick-reply" data-party="4">FDP</button>
            </div>
        `;
    } else {
        messageDiv.textContent = message;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot-Antwort generieren
function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hallo') || lowerMessage.includes('hi') || lowerMessage.includes('guten tag')) {
        return "Hallo! Ich bin Ihr Wahlchatbot für die deutschen Parteien. Wählen Sie eine Partei aus oder fragen Sie nach bestimmten Themen!";
    }
    
    if (lowerMessage.includes('cdu') || lowerMessage.includes('csu') || lowerMessage.includes('union')) {
        return "CDU/CSU: Die Unionsparteien setzen sich für soziale Marktwirtschaft, Familie und Sicherheit ein. Ihre Hauptthemen sind Wirtschaft, Sicherheit, Familie und Europa.";
    }
    
    if (lowerMessage.includes('spd') || lowerMessage.includes('sozialdemokrat')) {
        return "SPD: Die Sozialdemokratische Partei Deutschlands steht für soziale Gerechtigkeit, solidarische Gesellschaft und Arbeitnehmerrechte. Ihre Hauptthemen sind Soziales, Arbeit, Gerechtigkeit und Rente.";
    }
    
    if (lowerMessage.includes('grün') || lowerMessage.includes('grüne')) {
        return "Bündnis 90/Die Grünen: Die Grünen fokussieren auf Klimaschutz, ökologische Modernisierung und gesellschaftliche Freiheiten. Ihre Hauptthemen sind Klima, Umwelt, Europäische Integration und Bildung.";
    }
    
    if (lowerMessage.includes('fdp') || lowerMessage.includes('liberal') || lowerMessage.includes('freiheit')) {
        return "FDP: Die Freie Demokratische Partei setzt auf Bürgerrechte, digitale Freiheit und wirtschaftliche Liberalisierung. Ihre Hauptthemen sind Digitalisierung, Bürgerrechte, Wirtschaft und Innovation.";
    }
    
    if (lowerMessage.includes('thema') || lowerMessage.includes('themen')) {
        return "Die wichtigsten politischen Themen in Deutschland sind: Klimaschutz, Soziale Gerechtigkeit, Wirtschaft, Digitalisierung, Bildung und Innere Sicherheit. Zu welchem Thema möchten Sie mehr erfahren?";
    }
    
    if (lowerMessage.includes('klima') || lowerMessage.includes('umwelt')) {
        return "Zum Thema Klima und Umwelt haben die Parteien unterschiedliche Positionen. Die Grünen setzen auf ambitionierte Klimaziele, die CDU/CSU auf technologieoffene Lösungen, die SPD auf sozialverträglichen Klimaschutz und die FDP auf marktwirtschaftliche Instrumente.";
    }
    
    if (lowerMessage.includes('wirtschaft')) {
        return "In der Wirtschaftspolitik vertritt die CDU/CSU die Soziale Marktwirtschaft, die SPD setzt auf stärkere Regulierung und Mitbestimmung, die Grünen auf ökologische Transformation und die FDP auf Liberalisierung und Entbürokratisierung.";
    }
    
    if (lowerMessage.includes('danke') || lowerMessage.includes('vielen dank')) {
        return "Gern geschehen! Haben Sie weitere Fragen zu den deutschen Parteien oder bestimmten politischen Themen?";
    }
    
    return "Entschuldigung, ich habe das nicht verstanden. Bitte fragen Sie nach Informationen zu einer bestimmten Partei (CDU/CSU, SPD, Grüne, FDP) oder einem Thema wie Klima, Wirtschaft oder Soziales.";
}

// Event-Listener für Senden-Button
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        
        // Bot-Antwort nach kurzer Verzögerung
        setTimeout(() => {
            const response = generateBotResponse(message);
            addMessage(response);
        }, 1000);
    }
});

// Event-Listener für Enter-Taste
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Event-Listener für Schnellantworten
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        const partyId = e.target.getAttribute('data-party');
        const party = parties.find(p => p.id == partyId);
        
        if (party) {
            addMessage(`Informationen zur ${party.name}`, true);
            
            setTimeout(() => {
                addMessage(`Die ${party.name}: ${party.description}. Hauptthemen: ${party.topics.join(', ')}.`);
            }, 1000);
        }
    }
});

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    initializePartyCards();
    addMessage("Willkommen beim Wahlchatbot für deutsche Parteien! Wählen Sie eine Partei aus oder fragen Sie nach bestimmten Themen!");
});