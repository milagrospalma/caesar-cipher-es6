window.addEventListener('load', function () {
  let input = document.getElementById('input-text');
  let btnCipher = document.getElementById('btn-cipher');
  let btnDecipher = document.getElementById('btn-decipher');
  let container = document.getElementById('white-box');
  let paragraph = document.getElementById('paragraph');

  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Función para obtener la posición de una letra
  let returnIndex = (arr, element) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i])
        index = i;
    }
    return index;
  }

  // Función para cifrar
  let cipher = (text) => {
    let cipherWord = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text.charAt(i);
      let cipherLetter;
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
  let decipher = (text) => {
    let decipherWord = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text.charAt(i);
      let decipherLetter;
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
  btnCipher.addEventListener('click', () => {
    let text = input.value;
    if (text.trim() === '') {
      alert('¡Campo vacío!');
    } else {
      let message = cipher(text);
      paragraph.textContent = 'El texto cifrado es: ' + message;
      container.appendChild(paragraph);
      input.value = '';
    }
  });

  // Evento para el botón Descifrar
  btnDecipher.addEventListener('click', () => {
    let text = input.value;
    if (text.trim() === '') {
      alert('¡Campo vacío!');
    } else {
      let message = decipher(text);
      paragraph.textContent = 'El texto descifrado es: ' + message;
      container.appendChild(paragraph);
      input.value = '';
    }
  });
});