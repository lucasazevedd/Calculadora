function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    display.classList.remove('calculate-effect');
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
    var display = document.getElementById('display');
    display.classList.add('calculate-effect');
    console.log("Classe 'calculate-effect' adicionada ao display");
    setTimeout(function() {
        display.classList.remove('calculate-effect');
    }, 2000);
}

function addSquareRoot() {
    var valor = document.getElementById('display').value;
    var resultado = Math.sqrt(parseFloat(valor));
    document.getElementById('display').value = resultado;
    var display = document.getElementById('display');
    display.classList.add('calculate-effect');
    console.log("Classe 'calculate-effect' adicionada ao display");
    setTimeout(function() {
        display.classList.remove('calculate-effect');
    }, 2000);
}

function goToLink() {
    var url = "https://github.com/lucasazevedd";
    window.open(url, "_blank");
}