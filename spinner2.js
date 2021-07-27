const sequence = ["\r| ", "\r/ ", "\r- ", "\r\\ ", "\r| ", "\r/ ", "\r- ", "\r\\ ", "\r| "];

let time = 0;

for (const frame of sequence) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(frame);
  }, time);
}
