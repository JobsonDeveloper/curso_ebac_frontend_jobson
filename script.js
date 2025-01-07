const formulario = document.getElementById("form");

// Messages
const labelCampoA = document.getElementById("label_number_one");
const LabelCampoB = document.getElementById("label_number_two");
const sucessTextMessage = document.getElementById("sucess_message");

// Inputs
const number_one = document.getElementById("number_one");
const number_two = document.getElementById("number_two");


let formValido = false;

function validaBmaiorQueA(campoA, campoB) {
    if (campoA < campoB) {
        return true;
    }

    return false;
}

function removeErrorMessage() {
    labelCampoA.innerHTML = "";
    LabelCampoB.innerHTML = "";

    labelCampoA.style.display = "none";
    LabelCampoB.style.display = "none";

    formValido = true;
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formValido) {
        sucessTextMessage.classList.add("sucess");
        sucessTextMessage.innerHTML = `Formulário válido, A = ${number_one.value}, B = ${number_two.value}.`;
        sucessTextMessage.style.display = "block";
    }
    else {
        sucessTextMessage.classList.add("error");
        sucessTextMessage.innerHTML = `A precisa ser menor que B.`;
        sucessTextMessage.style.display = "block";
    }

});

//---------------- Verificações imediatas

number_one.addEventListener("change", () => {
    validaFormulario("A");
});

number_two.addEventListener("change", () => {
    validaFormulario("B");
});

function validaFormulario(campo) {
    if (number_one.value != "" && number_two.value != "") {
        if (validaBmaiorQueA(number_one.value, number_two.value)) {
            removeErrorMessage();
        }
        else {
            switch (campo) {
                case "A":
                    labelCampoA.innerHTML = "Diminua o valor deste campo!";
                    labelCampoA.style.display = "block";
                    formValido = false;
                    break;

                case "B":
                    LabelCampoB.innerHTML = "Almente o valor deste campo!";
                    LabelCampoB.style.display = "block";
                    formValido = false;
                    break;

                default:
                    break;
            }
        }

    }
}