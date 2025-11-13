from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY_HERE")

with open("knowledge_base.json", "r", encoding="utf-8") as f:
    knowledge_base = json.load(f)

with open("../system_prompt.txt", "r", encoding="utf-8") as f:
    system_prompt = f.read()

app = Flask(__name__)
CORS(app)

def get_ai_response(user_message, chat_history=[]):
    messages = [{"role": "system", "content": system_prompt}]
    for h in chat_history:
        messages.append({"role": "user", "content": h["user"]})
        messages.append({"role": "assistant", "content": h["bot"]})
    messages.append({"role": "user", "content": user_message})
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Fehler beim Abrufen der Antwort: {str(e)}"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("user_message", "")
    chat_history = data.get("chat_history", [])
    bot_response = get_ai_response(user_message, chat_history)
    return jsonify({"bot_response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)