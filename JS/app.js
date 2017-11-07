function cipher(text) { // declarando la función cifrado de texto
  var sustit = '' ; 
  var letra = 0;
} 
for (var i = 0; i < text.length ; i++) { // inicializa en 0, compara y luego incrementa
  letra = text.charCodeAt(i); // Sacar el codigo ASCII de cada letra
  if (letra >= 65 && letra <= 90) { // comparando letras según posición ASCII (mayúsculas)
    letra = (letra - 65 + 33) % 26 + 65; // aplicando la fórmula para código ASCII
    letra = String.fromCharCode(letra); // obtener la nueva letra según posic. ASCII
    sustit += letra; // Añadiendo la nueva letra
}
  else if (letra >= 97 && letra <= 122) { // nueva condición con respecto a lo anterior
    letra = (letra - 97 + 33) % 26 + 97; // aplicando la fórmula para código ASCII (minúsculas)
    letra = String.fromCharCode(letra);
    sustit += letra; 
  }
}
console.log((cipher(prompt)) // mostrar en consola 