function insert(num) {
  const numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
  document.getElementById('resultado').innerHTML = ' ';
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1,
  );
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = 'sem numero';
  }
}

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letras, i) => {
    setTimeout(() => (elemento.innerHTML += letras), 75 * i);
  });
}

const titulo = document.querySelector('.escts');
typeWrite(titulo);
