const sentence = "hello there from lighthouse labs\n";
setTimeout(() => {
    for (const char of sentence) {
    process.stdout.write(char);
    }
  }, 5000);
  


  