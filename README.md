# AIthena

**AIthena** is an AI-powered peer-assisted learning platform that identifies conceptual gaps in student understanding and delivers personalized micro-lessons, quizzes, and visual aids. It combines generative AI, speech recognition, and gamified learning to enhance how students study and retain concepts.

---

## Features

### Concept Rebuilder (Core)
- Upload notes, past year questions (PYQs), or textbooks
- LLM (Mistral) generates concept-check questions from the material
- Users answer via text or speech
- LLM analyzes the response, identifies weak areas, and delivers targeted micro-lessons

### Notes to Quiz
- Upload handwritten or typed notes
- Text is extracted using OCR (`pytesseract`)
- LLM converts the extracted content into a personalized quiz

### Speech-Based Quiz Evaluation
- Users answer quizzes via microphone input
- Speech is transcribed using `whisper.cpp`
- LLM compares the response to a reference answer and identifies conceptual gaps

### PYQ and Syllabus Analyzer
- Upload syllabus and PYQs
- Extracts and matches topics using TF-IDF and semantic similarity
- Generates topic importance metrics, visualized using bubble charts

### Smart Study Plan Generator
- Takes into account available time, exam date, and weak topics
- Outputs a customized, day-wise study plan
- Generates revision notes and mindmaps for each topic

---

## Tech Stack

| Component         | Technology                            |
|------------------|----------------------------------------|
| Backend           | Flask (deployed on Render)             |
| Frontend          | HTML, CSS, JavaScript (GitHub Pages / Netlify) |
| LLM               | Ollama (Mistral, Phi, Gemma)           |
| Speech-to-Text    | `whisper.cpp` (Tiny model)             |
| OCR               | `pytesseract`                          |
| Data Visualization| Chart.js, D3.js                        |
| UI Design         | Figma                                  |

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/AakxSha/AIthena.git
cd AIthena/backend

# Set up virtual environment
python -m venv venv
source venv/bin/activate   # Use venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run the Flask app
python app.py
