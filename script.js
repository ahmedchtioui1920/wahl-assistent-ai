// FAQ Fragen
const faqQuestions = [
    "Wie steht die Ökologische Partei zu Atomenergie?",
    "Welche Klimaschutzmaßnahmen plant die Fortschrittspartei?",
    "Was ist die Haltung der Bewahrungspartei zur Migration?",
    "Welche Steuerpolitik verfolgt die Soziale Gerechtigkeitspartei?",
    "Unterstützt die Fortschrittspartei den Ausbau erneuerbarer Energien?",
    "Welche Familienförderung bietet die Bewahrungspartei?",
    "Wie bewertet die Ökologische Partei Elektromobilität?",
    "Welche Meinung hat die Soziale Gerechtigkeitspartei zu Vermögenssteuern?",
    "Welche Bildungsinitiativen verfolgt die Fortschrittspartei?",
    "Fördert die Bewahrungspartei digitale Bildungsangebote?",
    "Welche Maßnahmen schlägt die Soziale Gerechtigkeitspartei im Gesundheitswesen vor?",
    "Welche Rolle spielt Nachhaltigkeit in der Politik der Fortschrittspartei?",
    "Wie positioniert sich die Bewahrungspartei zur Europäischen Union?",
    "Welche Haltung nimmt die Ökologische Partei zur industriellen Landwirtschaft ein?",
    "Welche Arbeitsmarktpolitik verfolgt die Soziale Gerechtigkeitspartei?",
    "Wie geht die Fortschrittspartei mit KI-Regulierung um?",
    "Welche Strategien hat die Bewahrungspartei, um Energiepreise stabil zu halten?",
    "Welche Vorschläge macht die Ökologische Partei für den öffentlichen Verkehr?",
    "Wie möchte die Soziale Gerechtigkeitspartei soziale Ungleichheit abbauen?",
    "In welchen Punkten unterscheiden sich die Parteien in Umwelt- und Wirtschaftspolitik?"
];

// DOM-Elemente
const chatMessages = document.getElementById('chatMessages');
const chatHistory = document.getElementById('chatHistory');
const faqList = document.getElementById('faqList');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const newChatButton = document.getElementById('newChatButton');

let currentChat = [];
let chatSessions = [];
let currentSessionId = Date.now().toString();

// FAQ Liste initialisieren
function initializeFAQ() {
    faqList.innerHTML = '';
    faqQuestions.forEach((question) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.textContent = question;
        faqItem.onclick = () => askQuestion(question);
        faqList.appendChild(faqItem);
    });
}

// Neuen Chat starten
function startNewChat() {
    // Aktuellen Chat speichern
    if (currentChat.length > 0) {
        chatSessions.push({
            id: currentSessionId,
            messages: [...currentChat],
              title: getChatTitle()
        });
    }
    
    // Neuen Chat initialisieren
    currentSessionId = Date.now().toString();
    currentChat = [];
    chatMessages.innerHTML = '';
    
    // Begrüßungsnachricht
    addMessage("wie kann ich ihnen helfen ?", false);
    
    // Chat-Verlauf aktualisieren
    updateChatHistory();
}

function getChatTitle() {
    // Wenn es mindestens 2 Nachrichten gibt, verwende die zweite (erste User-Nachricht)
    if (currentChat.length >= 2) {
        const secondMessage = currentChat[1].message;
        return secondMessage.substring(0, 40) + (secondMessage.length > 40 ? '...' : '');
    }
    // Fallback: erste Nachricht oder Standardtitel
    const firstMessage = currentChat[0]?.message;
    return firstMessage ? (firstMessage.substring(0, 40) + (firstMessage.length > 40 ? '...' : '')) : 'Neuer Chat';
}

// Chat-Verlauf aktualisieren
function updateChatHistory() {
    chatHistory.innerHTML = '';
    
    // Vorherige Chats anzeigen
    chatSessions.slice().reverse().forEach((session, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = session.title;
        historyItem.onclick = () => loadChatSession(session.id);
        chatHistory.appendChild(historyItem);
    });
}

// Chat-Session laden
function loadChatSession(sessionId) {
    const session = chatSessions.find(s => s.id === sessionId);
    if (session) {
        currentSessionId = sessionId;
        currentChat = [...session.messages];
        
        // Chat anzeigen
        chatMessages.innerHTML = '';
        currentChat.forEach(msg => {
            addMessage(msg.message, msg.isUser, false);
        });
    }
}

// Nachricht zum Chat hinzufügen
function addMessage(message, isUser = false, saveToHistory = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // In aktuellen Chat speichern
    if (saveToHistory) {
        currentChat.push({ message, isUser });
        
        // Chat-Titel aktualisieren (erste Nachricht als Titel)
        if (currentChat.length === 2 && isUser) {
            updateChatHistory();
        }
    }
}

// Frage stellen
function askQuestion(question) {
    userInput.value = question;
    sendButton.click();
}

// Event-Listener
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        userInput.style.height = '60px';
        
        // Hier wird später die API-Integration eingefügt
        // Die Bot-Antwort wird dann von der API kommen
    }
});

newChatButton.addEventListener('click', startNewChat);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendButton.click();
    }
});

// Auto-Height für Textarea
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
    startNewChat();
});