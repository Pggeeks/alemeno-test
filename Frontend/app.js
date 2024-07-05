document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);
    
    fetch('http://127.0.0.1:8000/api/sample/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        displayColors(data.colors);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displayColors(colors) {
    const resultsDiv = document.getElementById('results');
    const colorsDiv = document.getElementById('colors');
    
    // Clear previous results
    colorsDiv.innerHTML = '';
    
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        colorsDiv.appendChild(colorBox);
    });
    
    resultsDiv.classList.remove('hidden');
}
