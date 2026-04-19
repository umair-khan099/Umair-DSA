// Accept a string and print it in reverse order

const str = "hello"; // user input maan lo

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);