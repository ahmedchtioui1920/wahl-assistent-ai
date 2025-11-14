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
├─ backend/
│  ├─ app.py                  # Flask Backend, nutzt absolute Pfade
│  ├─ knowledge_base.json     # Parteiwissen
│  ├─ parties_info.json       # Zusatzinformationen zu Parteien
│  ├─ system_prompt.txt       # System-Prompt für KI
│  ├─ requirements.txt        # Python-Pakete
│  ├─ .env                    # OpenAI API Key (nicht hochladen!)
│  └─ data/                   # Zusätzliche Daten, z.B. FAQs
├─ frontend/
│  ├─ index.html              # Haupt-Frontend-Datei
│  ├─ style.css               # Styling für Chat und Layout
│  └─ app.js                  # JS-Logik für Chat, Vorschläge, Verlauf
├─ .gitignore
└─ README.md
```

---

## Installation & Setup

### 1. Repository klonen
```bash
git clone https://github.com/ahmedchtioui1920/wahl-assistent-ai.git
cd wahl-assistent-ai/backend
```

### 2. (Optional) Virtuelle Umgebung erstellen
```bash
python -m venv venv
.\\venv\\Scripts\\activate   # Windows
# oder
source venv/bin/activate     # Mac/Linux
```

### 3. Abhängigkeiten installieren
```bash
pip install -r requirements.txt
```

### 4. OpenAI API Key einrichten
- Erstelle eine `.env` Datei im `backend/` Ordner:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```
- Stelle sicher, dass `.env` in `.gitignore` steht.

### 5. Server starten
```bash
python app.py
```
- Der Server läuft unter `http://127.0.0.1:5000`

---

## Frontend starten
- Öffne `frontend/index.html` im Browser (z.B. via Live Server in VSCode)  
- Interagiere mit dem Chatbot  
- Beispiel-Fragen werden rechts angezeigt, Chat-Verlauf links  
- Neuer Chat Button erstellt einen frischen Chat und speichert den vorherigen Verlauf

---

## Nutzungshinweise
- Chatbot beantwortet nur Fragen, die in der Wissensbasis enthalten sind  
- Bei unbekannten Fragen wird höflich auf fehlende Informationen hingewiesen  
- Alle Antworten basieren auf **neutraler Wissensbasis**  
- Keine persönliche Meinung des Bots  

---

## Lizenz
Dieses Projekt ist für Bildungs- und Seminarzwecke erstellt.
