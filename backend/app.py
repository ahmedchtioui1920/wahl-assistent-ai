from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
from openai import OpenAI
import os
from pathlib import Path
from dotenv import load_dotenv

# Get the base directory (project root)
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from project root
load_dotenv(BASE_DIR / ".env")

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Load knowledge base
try:
    with open(BASE_DIR / "backend" / "knowledge_base.json", "r", encoding="utf-8") as f:
        knowledge_base = json.load(f)
except FileNotFoundError:
    print("Error: knowledge_base.json not found")
    knowledge_base = {}

# Load parties information
try:
    with open(BASE_DIR / "data" / "parties_info.json", "r", encoding="utf-8") as f:
        parties_info = json.load(f)
except FileNotFoundError:
    print("Error: parties_info.json not found")
    parties_info = {}

# Load system prompt
try:
    with open(BASE_DIR / "system_prompt.txt", "r", encoding="utf-8") as f:
        system_prompt = f.read()
except FileNotFoundError:
    print("Error: system_prompt.txt not found")
    system_prompt = "Du bist ein hilfreicher Wahl-Chatbot."

app = Flask(__name__, static_folder='../frontend', static_url_path='')
CORS(app)

def get_ai_response(user_message, chat_history=[]):
    # Build context with knowledge base
    context = system_prompt + "\n\nWISSENSBASIS:\n"
    context += json.dumps(knowledge_base, ensure_ascii=False, indent=2)
    context += "\n\nPARTEIEN-INFORMATIONEN:\n"
    context += json.dumps(parties_info, ensure_ascii=False, indent=2)
    
    messages = [{"role": "system", "content": context}]
    
    # Add chat history
    for h in chat_history:
        messages.append({"role": "user", "content": h["user"]})
        messages.append({"role": "assistant", "content": h["bot"]})
    
    # Add current user message
    messages.append({"role": "user", "content": user_message})
    
    try:
        print(f"[DEBUG] Sending request to OpenAI API with message: {user_message[:50]}...")
        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.7,
            max_tokens=500,
            timeout=30
        )
        result = response.choices[0].message.content
        print(f"[DEBUG] OpenAI API response received: {result[:100] if result else 'EMPTY'}...")
        return result if result else "Entschuldigung, ich habe keine Antwort erhalten. Bitte versuchen Sie es später erneut."
    except Exception as e:
        error_msg = f"OpenAI API Error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        import traceback
        traceback.print_exc()
        # Return a valid response even if API fails
        return f"Entschuldigung, es gab einen Fehler: {str(e)[:100]}"

@app.route("/", methods=["GET"])
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"}), 200

@app.route("/chat", methods=["POST"])
def chat():
    try:
        print("[DEBUG] /chat POST request received")
        data = request.get_json()
        print(f"[DEBUG] Request data: {data}")
        if not data:
            return jsonify({"bot_response": "No data received"}), 400
        user_message = data.get("user_message", "")
        chat_history = data.get("chat_history", [])
        print(f"[DEBUG] User message: {user_message}")
        print(f"[DEBUG] Chat history length: {len(chat_history)}")
        
        print("[DEBUG] Calling get_ai_response...")
        bot_response = get_ai_response(user_message, chat_history)
        print(f"[DEBUG] Got response: {bot_response[:100] if bot_response else 'EMPTY'}...")
        
        # Ensure bot_response is not empty
        if not bot_response or bot_response.strip() == "":
            bot_response = "Entschuldigung, ich konnte keine Antwort generieren. Bitte versuchen Sie es später erneut."
        
        response_json = jsonify({"bot_response": bot_response})
        print(f"[DEBUG] Returning response with length: {len(bot_response)}")
        return response_json
    except Exception as e:
        print(f"[ERROR] Chat endpoint error: {str(e)}")
        import traceback
        traceback.print_exc()
        error_response = f"Fehler: {str(e)[:100]}"
        return jsonify({"bot_response": error_response}), 500

@app.route("/data/<path:path>")
def serve_data(path):
    return send_from_directory(BASE_DIR / 'data', path)

@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"Starting Flask app on port {port}...")
    print(f"Knowledge base loaded: {bool(knowledge_base)}")
    print(f"Parties info loaded: {bool(parties_info)}")
    print(f"System prompt loaded: {bool(system_prompt)}")
    print(f"OpenAI API Key available: {bool(os.getenv('OPENAI_API_KEY'))}")
    app.run(host="0.0.0.0", port=port, debug=False)