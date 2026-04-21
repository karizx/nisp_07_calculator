function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) return "Błąd!";
    return a / b;
}
const display = document.getElementById('display');

// Dodaje cyfrę lub znak do wyświetlacza
function appendSymbol(symbol) {
    display.value += symbol;
}

// Czyści wyświetlacz
function clearDisplay() {
    display.value = '';
}

// Główna funkcja obliczeniowa
function calculate() {
    try {
        // eval() to najprostszy sposób na szybki kalkulator, 
        // choć w dużych projektach unika się go ze względów bezpieczeństwa.
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Błąd";
    }
}