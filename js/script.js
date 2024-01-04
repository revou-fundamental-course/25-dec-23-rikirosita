function calculate() {
    // Get input values
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Validate input
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Please enter valid numerical values for all sides.');
        return;
    }

    // Check if the sides form a valid triangle
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        // Calculate area and perimeter
        var s = (sideA + sideB + sideC) / 2;
        var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
        var perimeter = sideA + sideB + sideC;

        // Display the result
        document.getElementById('result').innerHTML = 'Luas Segitiga: ' + area.toFixed(2) + '<br> Keliling Segitiga: ' + perimeter.toFixed(2);
    } else {
        alert('The input sides do not form a valid triangle.');
    }
}