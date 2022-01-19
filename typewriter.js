const sentence = "hello there from lighthouse labs\n";
setTimeout(() => {
    for (const char of sentence) {
    process.stdout.write(char);
    } console.log("");
  }, 5000);
  


  