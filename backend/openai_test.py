from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY_HERE")  # Replace with your API key

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful political chatbot."},
        {"role": "user", "content": "Was hält die Ökologische Partei von Atomkraft?"}
    ]
)

print(response.choices[0].message.content)
