document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('calculator-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var weight = parseFloat(document.getElementById('weight-input').value);
        var volume = parseFloat(document.getElementById('volume-input').value);

        var percentWV = (weight / volume) * 100;

        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="result-box">
                <p class="input-label">Percent Weight in Volume (w/v):</p>
                <p class="input-field">${percentWV.toFixed(2)}%</p>
            </div>
        `;
    });
});