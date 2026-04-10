# Learning ChatGPT

ChatGPT is OpenAI's conversational AI. This section explores its capabilities for developers.

## Topics

- **Chat Completions API** – Integrating ChatGPT into applications
- **System Prompts** – Customizing ChatGPT's behavior
- **Function Calling** – Connecting ChatGPT to external tools
- **Fine-tuning Basics** – Adapting models to specific domains

## Quick Start

1. Sign up at [platform.openai.com](https://platform.openai.com).
2. Generate an API key.
3. Try the examples in this folder using `openai` Python SDK:

```python
from openai import OpenAI

client = OpenAI()  # uses OPENAI_API_KEY env var

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello, ChatGPT!"}]
)
print(response.choices[0].message.content)
```

## Exercise Ideas

- Build a Q&A chatbot for a topic of your choice.
- Implement a simple function-calling agent that can perform web searches.
