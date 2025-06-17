document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  const area = document.getElementById('questionsArea');
  area.innerHTML = '<h3>Generated Questions:</h3>';
  data.questions.forEach(q => {
    area.innerHTML += `<p>• ${q}</p>`;
  });
});
