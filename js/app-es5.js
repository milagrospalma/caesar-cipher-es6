window.addEventListener('load', function() {
  var input = document.getElementById('input-text');
  var btnCipher = document.getElementById('btn-cipher');
  var btnDecipher = document.getElementById('btn-decipher');
  var container = document.getElementById('white-box');
  var paragraph = document.getElementById('paragraph');
  
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Función para obtener la posición de una letra
  function returnIndex(arr, element) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if (element === arr[i])
        index = i;
    }
    return index;
  }

  // Función para cifrar
  function cipher(text) {
    var cipherWord = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text.charAt(i);
      var cipherLetter;
      if (returnIndex(upperCase, letter) !== -1) {
        cipherLetter = (returnIndex(upperCase, letter) + 33) % 26;
        cipherWord += upperCase[cipherLetter];
      } else if (returnIndex(lowerCase, letter) !== -1) {
        cipherLetter = (returnIndex(lowerCase, letter) + 33) % 26;
        cipherWord += lowerCase[cipherLetter];
      } else {
        cipherLetter = letter;
        cipherWord += cipherLetter;
      }
    }
    return cipherWord;
  };

  // Función para descifrar
  function decipher(text) {
    var decipherWord = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text.charAt(i);
      var decipherLetter;
      if (returnIndex(upperCase, letter) !== -1) {
        decipherLetter = (returnIndex(upperCase, letter) - 33 % 26 + 26) % 26;
        decipherWord += upperCase[decipherLetter];
      } else if (returnIndex(lowerCase, letter) !== -1) {
        decipherLetter = (returnIndex(lowerCase, letter) - 33 % 26 + 26) % 26;
        decipherWord += lowerCase[decipherLetter];
      } else {
        decipherLetter = letter;
        decipherWord += decipherLetter;
      }
    }
    return decipherWord;
  };

  // Evento para el botón Cifrar
  btnCipher.addEventListener('click', function() {
    var text = input.value;
    if (text.trim() === '') {
      alert('¡Campo vacío!');
    } else {
      var message = cipher(text);
      paragraph.textContent = 'El texto cifrado es: ' + message;
      container.appendChild(paragraph);
      input.value = '';
    }
  });

  // Evento para el botón Descifrar
  btnDecipher.addEventListener('click', function() {
    var text = input.value;
    if (text.trim() === '') {
      alert('¡Campo vacío!');
    } else {
      var message = decipher(text);
      paragraph.textContent = 'El texto descifrado es: ' + message;
      container.appendChild(paragraph);
      input.value = '';
    }
  });
});