const sentence = '|/-\\|/-\\|';

let x = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, x += 200);
};
