//const sentence = "hello there from lighthouse labs\n"; 
//console.log will add a new line character (\n) to the end of the string
const sentence = "hello there from lighthouse labs\n"; 
let iterater = 0;
for (const char of sentence) {
  setTimeout( () => {
    process.stdout.write(char);
    }, iterater+=50);
};
  


  