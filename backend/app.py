from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    # Placeholder response for now
    return jsonify({"questions": ["What is AI?", "Explain neural networks."]})

if __name__ == '__main__':
    app.run(debug=True)
