document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);
    
    const loadingDiv = document.getElementById('loading');
    const outputImage = document.getElementById('output');
    const resultsDiv = document.getElementById('results');
    const colorsDiv = document.getElementById('colors');

    // Show loading GIF and hide image preview
    loadingDiv.classList.remove('hidden');
    outputImage.classList.add('hidden');
    resultsDiv.classList.add('hidden');
    // Calling the API here
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
    })
    .finally(() => {
        // Hide loading GIF
        loadingDiv.classList.add('hidden');
        // Show image preview again
        outputImage.classList.remove('hidden');
    });
});

function displayColors(colors) {
    const resultsDiv = document.getElementById('results');
    const colorsDiv = document.getElementById('colors');
    // Clear previous results
    colorsDiv.innerHTML = '';
    Object.entries(colors).forEach(([key, color]) => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box'; // SET CSS background with their respective RGB Color
        colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        colorBox.innerHTML = `<span class="color-value">${color[0]}, ${color[1]}, ${color[2]}</span>`; // Gives RGB Value of the color
        colorsDiv.appendChild(colorBox);

        const colorLabel = document.createElement('span');
        colorLabel.className = 'color-label';
        colorLabel.textContent = key;
        colorsDiv.appendChild(colorLabel);
    });
    
    resultsDiv.classList.remove('hidden');
}
