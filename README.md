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

## 🗂️ Projektstruktur (Phase 1)

```
wahl-chatbot-accountability/
├── backend/
│   ├── openai_test.py           # Testscript für OpenAI API
│   └── knowledge_base.json      # Wissensbasis: Parteienpositionen nach Themen
└── data/
    ├── parties_info.json        # Name, Slogan und Beschreibung der Parteien
    └── faqs.json                # Beispiel-Fragen für den Chatbot
```

---

## ⚙️ Setup-Anleitung

### ⚠️ WICHTIGER SICHERHEITSHINWEIS
**Ihr OpenAI API-Key muss sofort regeneriert werden!** Der aktuelle Key in der `.env` Datei wurde möglicherweise öffentlich sichtbar und sollte aus Sicherheitsgründen ersetzt werden.

1. Gehen Sie zu [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Löschen Sie den alten Key
3. Erstellen Sie einen neuen API-Key
4. Ersetzen Sie den Key in der `.env` Datei

### Installation

1. **Repository klonen**
```bash
git clone https://github.com/ahmedchtioui1920/wahl-chatbot-accountability.git
cd wahl-chatbot-accountability
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

4. **OpenAI API Key eintragen**
- Erstellen Sie einen API-Key auf [platform.openai.com](https://platform.openai.com/)
- Öffnen Sie die `.env` Datei im Hauptverzeichnis
- Ersetzen Sie `your_api_key_here` durch Ihren echten API-Key
- **Wichtig:** Teilen Sie die `.env` Datei niemals öffentlich!

5. **Testen der OpenAI-Verbindung**
```bash
cd backend
python openai_test.py
```

6. **Backend starten**
```bash
python app.py
```
- Der Server läuft auf `http://localhost:5000`

7. **Frontend öffnen**
- Öffnen Sie `frontend/index.html` in Ihrem Browser
- Oder nutzen Sie einen lokalen Webserver (z.B. Live Server Extension in VS Code)

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

## 🔖 Ziele Phase 1
- Vollständige **Content-Erstellung** (Parteien, Wissen, FAQs)
- Funktionsfähiger **API-Test** mit OpenAI
- Bereitstellung einer **sauberen Projektstruktur** für Phase 2

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

