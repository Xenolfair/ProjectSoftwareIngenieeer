// Guardar Perfil del Usuario
document.getElementById("perfilForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const meta = document.getElementById("meta").value;

    if (nombre && meta) {
        document.querySelector(".main-title2").innerText = 
            `Nombre: ${nombre}, Meta Financiera: ${meta} 💸💎`;
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

//letter 
async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  await node.type('💸 Tu ')
  
  while (true) {
    await node.type('ahorro anual es de:')
    await sleep(2000)
    await node.delete('ahorro anual es de:')
    await node.type('dinero anual es:')
    await sleep(2000)
    await node.delete('dinero anual es:')
  }
}
// FIRMAS
const name = document.querySelector('#First-name')
const sign = document.querySelector('.signature-main')
const uppercase = document.querySelectorAll('.letter-bank .up')
const lowercase = document.querySelectorAll('.letter-bank .lo')
const signedBy = document.querySelector('.signed-by')
const modal = document.querySelector('.modal')

name.addEventListener("keydown", (event) => {
  if ((event.code === `Key${event.key.toUpperCase()}`) || (event.code == 'Space')) {
    var key = event.key   	
    draw(key,true)
  } else if (event.code == 'Backspace') {
    setTimeout(function() {     
      var value = name.value
      sign.innerHTML = ''
      var letters = value.split('')
      letters.forEach((item, i) => {
        draw(item,false)
      })
    }, 50);
  }
  setTimeout(function() {  
    if (!name.value) {
      modal.classList.remove('active')
    } else {
      modal.classList.add('active')
    }
  }, 50);
})

function draw(key,animate) {
  if (key == " ") {
    const space = document.createElement("div");
    space.style.minWidth = '12px'   
    sign.appendChild(space)   
  } else {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    for (i = 0; i < alphabet.length; i++) {
      var item = alphabet[i]

      if (key.toLowerCase() == item) {
        const letter = document.createElement("div");  
        if (key == item.toUpperCase()) {
          letter.innerHTML = uppercase[i].innerHTML
          letter.classList.add('up')
        } else {
          letter.innerHTML = lowercase[i].innerHTML
          letter.classList.add('lo')
        }
        letter.classList.add(item)
        if (animate) {
          setTimeout(function() { 
            letter.querySelector('svg path').style.strokeDashoffset = '0'
          }, 50);
        } else {
          letter.querySelector('svg path').style.strokeDashoffset = '0'
        }
        sign.appendChild(letter)
      }
    }
  }
}