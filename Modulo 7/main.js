const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const mensagemSucesso = `O numero B: <b>${numeroB.value}</b> é maior que o numero A: <b>${numeroA.value}</b>`;
    const mensagemError = `O numero B: <b>${numeroB.value}</b> é menor que o numero A: <b>${numeroA.value}</b>`;

    if (numeroA.value < numeroB.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        
        numeroA.value = '';
        numeroB.value = '';
    }
})



