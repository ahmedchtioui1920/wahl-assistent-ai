# Wahl-Chatbot – Politischer Chatbot zur Parteieninformation

## Projektbeschreibung
Der **Wahl-Chatbot** ist ein Prototyp, der Benutzer:innen ermöglicht, Fragen zu fiktiven politischen Parteien zu stellen.  
Ziel des Projekts ist es, **Algorithmic Accountability** zu untersuchen und zu zeigen, wie KI-basierte Systeme auf politische Fragen neutral und sachlich antworten können.  

Das Projekt wird im Rahmen des Seminars *„Kann Code Verantwortung? Wie man Algorithmic Accountability untersucht und vermittelt?“* entwickelt.

---

## Parteien im Prototyp
1. **Fortschrittspartei**  
   *Slogan:* „Innovation und Zukunft für alle“  
   Fokus: Technologie, Digitalisierung, erneuerbare Energien, MINT-Bildung.

2. **Bewahrungspartei**  
   *Slogan:* „Tradition bewahren, Werte schützen“  
   Fokus: Konservative Werte, stabile Wirtschaft, klassische Bildung.

3. **Ökologische Partei**  
   *Slogan:* „Nachhaltigkeit jetzt“  
   Fokus: Umwelt, Klimaschutz, erneuerbare Energien.

4. **Soziale Gerechtigkeitspartei**  
   *Slogan:* „Gleichheit und Chancengleichheit für alle“  
   Fokus: Soziale Sicherheit, Umverteilung, faire Bildung, Solidarität.

---

## Features
- Chatbot, der Fragen zu den Parteien beantwortet  
- Anzeige von 15 Beispiel-Fragen für Benutzer:innen  
- Chatverlauf und neue Chat-Funktion  
- Frontend: HTML/CSS/JavaScript (responsive)  
- Backend: Python + Flask + OpenAI API  
- System-Prompt für neutrale, sachliche Antworten  
- Fehler-Handling bei API-Ausfällen  
- Absolute Pfade im Backend, um von jedem Arbeitsverzeichnis aus zu funktionieren

---

## Verwendete Tools & Technologien
- **Python 3.11+**: Backend-Logik und API-Server  
- **Flask**: Webframework für RESTful API  
- **Flask-CORS**: Erlaubt Kommunikation zwischen Frontend und Backend  
- **OpenAI API**: GPT-4 für KI-Antworten  
- **dotenv**: Laden von Umgebungsvariablen, insbesondere OpenAI API Key  
- **HTML/CSS/JS**: Frontend, Chatfenster, Chatverlauf, Beispiel-Fragen  
- **Visual Studio Code**: Entwicklung und Live Server für Frontend-Test  
- **Git/GitHub**: Versionskontrolle und Team-Kollaboration

---

## Projektstruktur
```
wahl-assistent-ai/
├── .gitignore                   # Git-Ausschlussliste
├── requirements.txt             # Python-Abhängigkeiten
├── system_prompt.txt            # System-Prompt für den KI-Chatbot
├── backend/
│   └── knowledge_base.json      # Wissensbasis: Parteienpositionen nach Themen
├── data/
│   ├── parties_info.json        # Name, Slogan und Beschreibung der Parteien
│   └── faqs.json                # Beispiel-Fragen für den Chatbot (15 Fragen)
└── frontend/
    ├── index.html               # Hauptseite des Chatbots
    ├── app.js                   # Frontend-Logik (Chat, Verlauf, Vorschläge)
    └── style.css                # Styling für Chat und Layout
```

---

## Installation & Setup

### 1. Repository klonen
```bash
git clone https://github.com/ahmedchtioui1920/wahl-assistent-ai.git
cd wahl-assistent-ai
```


### 2. Backend starten
```bash
python backend/app.py
```
- Der Flask-Server läuft auf `http://127.0.0.1:5000`
- Dank absoluter Pfade kann das Backend von jedem Verzeichnis aus gestartet werden

### 3. Frontend öffnen
- **Option A:** Öffnen Sie `frontend/index.html` direkt in Ihrem Browser
- **Option B (empfohlen):** Nutzen Sie die "Live Server" Extension in VS Code:
  - Rechtsklick auf `frontend/index.html` → "Open with Live Server"
  - Öffnet den Chatbot mit Auto-Reload bei Änderungen

### 4. Chatbot nutzen
- Stellen Sie sicher, dass das Backend läuft
- Öffnen Sie das Frontend im Browser
- Wählen Sie eine Beispielfrage aus der rechten Seitenleiste oder stellen Sie eine eigene Frage
- Der Chatbot antwortet basierend auf der Wissensbasis
- Nutzen Sie "Neuer Chat" um einen frischen Chat zu starten (Verlauf wird links gespeichert)

---

## Nutzungshinweise
- Chatbot beantwortet nur Fragen, die in der Wissensbasis enthalten sind  
- Bei unbekannten Fragen wird höflich auf fehlende Informationen hingewiesen  
- Alle Antworten basieren auf **neutraler Wissensbasis**  
- Keine persönliche Meinung des Bots  

---

## 🔖 Projektstatus

### ✅ Abgeschlossen
- **Content-Erstellung:** 4 Parteien mit Positionen zu 5 Themen
- **Backend:** Flask-API mit OpenAI-Integration und absoluten Pfaden
- **Frontend:** Funktionsfähige Chat-Oberfläche mit Verlauf und Beispiel-Fragen
- **Wissensbasis:** Strukturierte JSON-Dateien für Parteien und FAQs
- **Umgebungskonfiguration:** .env-basierte API-Key-Verwaltung
- **System-Prompt:** Neutraler, informativer Chatbot-Prompt
- **Fehlerbehandlung:** Robuste Error-Handling für API-Ausfälle

### 🔄 In Entwicklung
- Testing & Quality Assurance
- Erweiterte Chat-Features (z.B. persistente Speicherung)
- Performance-Optimierungen

---

## 👥 Team
| Name | Rolle |
|------|------|
| Ayoub & Ahmed | Team 1 - Content, Ethics, Backend & AI |
| Ibrahim & Walid | Team 2 - Frontend, UX, QA & Documentation |

---

## 📌 Hinweise
- Der Chatbot ist **neutral** konzipiert, um Bias zu vermeiden
- Alle Antworten basieren ausschließlich auf der vordefinierten Wissensbasis
- Projekt dient zur Untersuchung von **Algorithmic Accountability**

---

## Lizenz
Dieses Projekt ist für Bildungs- und Seminarzwecke erstellt.

---

## 📡 API Endpoint: `/chat`  

**als Proxy**: Der Client sendet eine Nachricht an `/chat`, der Server leitet diese Anfrage an die ChatGPT-API weiter, verarbeitet das Ergebnis und liefert eine politisch neutrale, gefilterte Antwort zurück

🔹 Funktionsweise
1. Der Client sendet eine Nutzerfrage an `/chat`.
2. Der Server übernimmt:
   - Validierung der Nutzereingabe  
   - Anfrage an die ChatGPT-API (z. B. `POST https://api.openai.com/v1/chat/completions`)  
   - Anwendung eigener Filter und Accountability-Checks  
     (z. B. Bias-Erkennung, politisch neutrale Re-Framing-Logik)
3. Der Server gibt die finale, bereinigte Antwort an den Client zurück.

🔹 Request-Format (an den Server)
```json
{
  "message": "string",
  "session_id": "string"
}

### Response-Format (vom Server zurück an den Client)
{
  "reply": "string",
  "flags"(optional): {
    "bias_detected": false,
    "political_endorsement_detected": false
  }
}

