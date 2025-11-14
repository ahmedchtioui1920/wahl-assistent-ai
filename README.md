# Wahl-Chatbot & Algorithmic Accountability

**Seminar:** "Kann Code Verantwortung? Wie man Algorithmic Accountability untersucht und vermittelt?"
**Projekt:** Entwicklung eines Prototyp-Wahl-Chatbots zur Untersuchung von *Algorithmic Accountability*
**Zeitrahmen:** 5 Wochen

---

## 📖 Projektbeschreibung

Dieses Projekt ist ein **KI-gestützter Wahl-Chatbot**, der politische Parteien simuliert und es erlaubt, **algorithmische Verantwortung** (Algorithmic Accountability) zu erforschen.

Der Chatbot antwortet neutral auf Fragen zu verschiedenen politischen Themen, basierend auf **vordefinierten Parteipositionen** und **FAQ-Fragen**. Die Arbeit erfolgt in Teamarbeit mit klaren Rollen:

- **Team 1** – Content & Ethics: Erstellung der Parteienprofile, Wissensbasis und FAQs
- **Team 1** – Backend & AI: OpenAI API-Test, Backend-Struktur
- **Team 2** – Frontend & UX: UI-Design, HTML/CSS/JS (Phase 2)
- **Team 2** – QA & Documentation: Testfälle, Dokumentation (Phase 2)

---

## 🗂️ Projektstruktur

```
wahl-assistent-ai/
├── .gitignore                   # Git-Ausschlussliste
├── requirements.txt             # Python-Abhängigkeiten
├── system_prompt.txt            # System-Prompt für den KI-Chatbot
├── backend/
│   ├── app.py                   # Flask Backend-Server
│   ├── openai_test.py           # Testscript für OpenAI API
│   └── knowledge_base.json      # Wissensbasis: Parteienpositionen nach Themen
├── data/
│   ├── parties_info.json        # Name, Slogan und Beschreibung der Parteien
│   └── faqs.json                # Beispiel-Fragen für den Chatbot
└── frontend/
    ├── index.html               # Hauptseite des Chatbots
    ├── app.js                   # Frontend-Logik
    └── style.css                # Styling
```

---

## ⚙️ Setup-Anleitung

### Installation

1. **Repository klonen**
```bash
git clone https://github.com/ahmedchtioui1920/wahl-assistent-ai.git
cd wahl-assistent-ai
```

2. **Python-Umgebung einrichten** (optional, aber empfohlen)
```bash
python -m venv venv
venv\Scripts\activate          # Windows
```

3. **Abhängigkeiten installieren**
```bash
pip install -r requirements.txt
```

4. **OpenAI API Key konfigurieren**
- Erstellen Sie einen neuen API-Key auf [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- Erstellen Sie eine `.env` Datei im Hauptverzeichnis:
```bash
echo OPENAI_API_KEY=your_api_key_here > .env
```
- Ersetzen Sie `your_api_key_here` durch Ihren echten API-Key
- **Wichtig:** Die `.env` Datei wird durch `.gitignore` geschützt und sollte niemals öffentlich geteilt werden!

5. **API-Verbindung testen (optional)**
```bash
python backend/openai_test.py
```
Sollte eine erfolgreiche Antwort vom Chatbot anzeigen.

6. **Backend starten**
```bash
python backend/app.py
```
- Der Flask-Server läuft auf `http://127.0.0.1:5000`
- Sie können das Backend auch aus dem Hauptverzeichnis starten

7. **Frontend öffnen**
- **Option A:** Öffnen Sie `frontend/index.html` direkt in Ihrem Browser
- **Option B (empfohlen):** Nutzen Sie die "Live Server" Extension in VS Code:
  - Rechtsklick auf `frontend/index.html` → "Open with Live Server"
  - Öffnet den Chatbot mit Auto-Reload bei Änderungen

8. **Chatbot nutzen**
- Stellen Sie sicher, dass das Backend läuft
- Öffnen Sie das Frontend im Browser
- Wählen Sie eine Beispielfrage oder stellen Sie eine eigene Frage
- Der Chatbot antwortet basierend auf der Wissensbasis

---

## 📝 Team 1 Aufgaben (Phase 1)
- Erstellung der **4 fiktiven Parteien** mit Namen, Slogans und Beschreibung (`parties_info.json`)
- Erstellung der **Wissensbasis** (`knowledge_base.json`) für politische Themen
- Erstellung von **typischen Wählerfragen** (`faqs.json`)

---

## 📝 Team 1 Aufgaben (Phase 1)
- Einrichtung der **OpenAI API** und Testskript (`openai_test.py`)
- Planung der **Backend-Architektur** für spätere Integration

---

## 🔖 Projektstatus

### ✅ Abgeschlossen
- **Content-Erstellung:** 4 Parteien mit Positionen zu 5 Themen
- **Backend:** Flask-API mit OpenAI-Integration
- **Frontend:** Funktionsfähige Chat-Oberfläche mit Verlauf
- **Wissensbasis:** Strukturierte JSON-Dateien für Parteien und FAQs
- **Umgebungskonfiguration:** .env-basierte API-Key-Verwaltung
- **System-Prompt:** Neutraler, informativer Chatbot-Prompt

### 🔄 In Entwicklung
- Testing & Quality Assurance
- Erweiterte Chat-Features (z.B. Persistierung)
- Dokumentation & Deployment

## 🛠️ Technologie-Stack
- **Backend:** Python, Flask, OpenAI API
- **Frontend:** HTML, CSS, JavaScript
- **KI-Modell:** GPT-4
- **Datenverwaltung:** JSON-basierte Wissensbasis

---

## 👥 Team
| Name | Rolle |
|------|------|
| Ayoub & Ahmed | Team 1 - Content, Ethics, Backend & AI |
| Ibrahim & Walid | Team 2 - Frontend, UX, QA & Documentation |

---

## 📌 Hinweise
- Dieses Repo repräsentiert **Phase 1 des Projekts**.
- Phase 2 wird **Frontend & Core Integration** enthalten, Phase 3 **Testing & Abschluss**.
- Der Chatbot ist **neutral**, um Bias zu vermeiden und Algorithmic Accountability zu prüfen.

