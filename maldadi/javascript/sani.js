function teste()
{
    var img = "/img/botijao-13kg-191x300.png"
    var tema = document.getElementById("laranja")
    tema.src = img;
}
function teste2()
{
    var img = "/img/gass-removebg-preview.png"
    var tema = document.getElementById("laranja")
    tema.src = img;
}

const senha = document.getElementById('senha')
const confirma = document.getElementById('senha2')
const escrita = document.getElementById('escrita')
const form = document.getElementById('formee')

function validar()
{
  if (senha.value !== confirma.value) {
    escrita.textContent = 'As senhas não coincidem!'
  } else {
    escrita.textContent = ''
  }
}

senha.onchange = validar()
confirma.onkeyup = validar()

form.onsubmit = function(event) 
{
    if (senha.value !== confirma.value) {
      event.preventDefault();
      escrita.textContent = 'As senhas não coincidem!';
    }
  }