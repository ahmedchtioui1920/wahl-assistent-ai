# Wahl-Chatbot & Algorithmic Accountability

**Seminar:** "Kann Code Verantwortung? Wie man Algorithmic Accountability untersucht und vermittelt?"
**Projekt:** Entwicklung eines Prototyp-Wahl-Chatbots zur Untersuchung von *Algorithmic Accountability*
**Zeitrahmen:** 5 Wochen

---

## 📖 Projektbeschreibung

Dieses Projekt ist ein **KI-gestützter Wahl-Chatbot**, der politische Parteien simuliert und es erlaubt, **algorithmische Verantwortung** (Algorithmic Accountability) zu erforschen.

Der Chatbot antwortet neutral auf Fragen zu verschiedenen politischen Themen, basierend auf **vordefinierten Parteipositionen** und **FAQ-Fragen**. Die Arbeit erfolgt in Teamarbeit mit klaren Rollen:

- **Ahmed (Person A)** – Content & Ethics: Erstellung der Parteienprofile, Wissensbasis und FAQs
- **Ayoub (Person B)** – Backend & AI: OpenAI API-Test, Backend-Struktur
- **Walid (Person C)** – Frontend & UX: UI-Design, HTML/CSS/JS (Phase 2)
- **Ibrahim (Person D)** – QA & Documentation: Testfälle, Dokumentation (Phase 2)

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

1. **Repository klonen**
```bash
git clone https://github.com/ahmedchtioui1920/wahl-chatbot-accountability.git
cd wahl-chatbot-accountability/backend
```

2. **Python-Umgebung einrichten** (optional, aber empfohlen)
```bash
python -m venv venv
source venv/bin/activate       # Linux/Mac
venv\Scripts\activate          # Windows
```

3. **Abhängigkeiten installieren**
```bash
pip install flask flask-cors openai
```

4. **OpenAI API Key eintragen**
- Erstelle einen API-Key auf [platform.openai.com](https://platform.openai.com/)
- Ersetze `"YOUR_API_KEY_HERE"` in `openai_test.py` durch deinen Key

5. **Testen der OpenAI-Verbindung**
```bash
python openai_test.py
```
- Es sollte eine Antwort zu deiner Testfrage ausgegeben werden.

---

## 📝 Person A Aufgaben (Phase 1)
- Erstellung der **4 fiktiven Parteien** mit Namen, Slogans und Beschreibung (`parties_info.json`)
- Erstellung der **Wissensbasis** (`knowledge_base.json`) für politische Themen
- Erstellung von **typischen Wählerfragen** (`faqs.json`)

---

## 📝 Person B Aufgaben (Phase 1)
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
| Ahmed | Person A – Content & Ethics |
| Ayoub | Person B – Backend & AI |
| Walid | Person C – Frontend & UX |
| Ibrahim | Person D – QA & Documentation |

---

## 📌 Hinweise
- Dieses Repo repräsentiert **Phase 1 des Projekts**.
- Phase 2 wird **Frontend & Core Integration** enthalten, Phase 3 **Testing & Abschluss**.
- Der Chatbot ist **neutral**, um Bias zu vermeiden und Algorithmic Accountability zu prüfen.

