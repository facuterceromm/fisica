const masa = document.getElementById("masa");
const angulo = document.getElementById("angulo");
const op1 = document.getElementById("opcion");
const op2 = document.getElementById("opcion2");
const verificarButton = document.getElementById("verificar");
const resultadoDiv = document.getElementById("resultado");


const coeficientes = {
    hielo: { hielo: 0.03, madera: 0.05, cuero: 0.04, vidrio: 0.02, acero: 0.03 },
    madera: { hielo: 0.05, madera: 0.4, cuero: 0.5, vidrio: 0.3, acero: 0.4 },
    cuero: { hielo: 0.04, madera: 0.5, cuero: 0.6, vidrio: 0.4, acero: 0.5 },
    vidrio: { hielo: 0.02, madera: 0.3, cuero: 0.4, vidrio: 0.9, acero: 0.5 },
    acero: { hielo: 0.03, madera: 0.4, cuero: 0.5, vidrio: 0.5, acero: 0.8 },
};

function verificarReposo() {
    const masaValor = parseFloat(masa.value) || 0;
    const anguloValor = parseFloat(angulo.value) || 0;
    const material1 = op1.value.toLowerCase();
    const material2 = op2.value.toLowerCase();

    console.log(`Masa: ${masaValor}, Ángulo: ${anguloValor}, Material1: ${material1}, Material2: ${material2}`);

 
    if (masaValor <= 0 || anguloValor < 0 || !coeficientes[material1] || !coeficientes[material1][material2]) {
        resultadoDiv.textContent = "Ingrese valores";
        resultadoDiv.style.color = "orange";
        return;
    }

    
    const coefRozamiento = coeficientes[material1][material2];

    
    const peso = masaValor * 9.8; 
    const fuerzaPesoX = peso * Math.sin((anguloValor * Math.PI) / 180); 
    const fuerzaPesoY = peso * Math.cos((anguloValor * Math.PI) / 180); 
    const fuerzaFriccion = coefRozamiento * fuerzaPesoY; 

    
    if (Math.abs(fuerzaPesoX) <= fuerzaFriccion) {
        resultadoDiv.textContent = "la caja esta en reposo";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = "La caja no esta en reposo";
        resultadoDiv.style.color = "red";
    }
}
verificarButton.addEventListener("click", verificarReposo);