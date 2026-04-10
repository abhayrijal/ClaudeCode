# Learning Google Gemini

Google Gemini is Google's multimodal AI model family. This section covers using Gemini for code and content generation.

## Topics

- **Gemini API Quickstart** – Making your first API call
- **Multimodal Inputs** – Sending text, images, and files to Gemini
- **Code Generation** – Using Gemini for coding tasks
- **Google AI Studio** – No-code prototyping with Gemini

## Quick Start

1. Get an API key from [aistudio.google.com](https://aistudio.google.com).
2. Install the SDK: `pip install google-generativeai`
3. Try a simple request:

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Explain recursion with a simple Python example.")
print(response.text)
```

## Exercise Ideas

- Use Gemini's multimodal capability to analyze a screenshot and generate HTML for it.
- Compare the same prompt sent to Gemini and Claude — note differences in style and accuracy.
