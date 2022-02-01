// Path modules 

const path = require('path');


console.log(path.sep);

const filepath = path.join('/content','subfolder','test.txt')   
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const dir = path.dirname(filepath);
console.log(dir);

const ext = path.extname(filepath);
console.log(ext);


const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(path.isAbsolute(absolutePath));

console.log(path.parse(absolutePath));



const formate = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  });
console.log(formate);