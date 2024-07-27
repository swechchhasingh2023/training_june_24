// fs file system -  create, delete, rename, append the file

const fs = require('fs');

// fs.writeFile('myFile.txt', 'Javascript is important', () =>{
//     console.log('file created')
// })

// writeFile will overwrite the whole content let suppose i will change Javascript is important content

// fs.appendFile('mycode.txt', 'This is nodejs3\n', () =>{
//     console.log('file Appended')
// })

// fs.readFile('mycode.txt', 'utf-8', (err, data) =>{
//     if (err) throw err;
//     console.log(data)
// })

// utf-8 is default encoding method we use to read the file.

// fs.rename('mycode1.text', 'mycode2.txt', () => {
//     console.log("File Renamed")
// })

// while run this code o/p file renamed in actually no file exists

// fs.rename('mycode.txt', 'mycode2.txt', (err) => {
//     if (err) throw err
//     console.log("File Renamed")
// })

fs.unlink('myFile.txt', (err) => {
    if (err) throw err
    console.log("File Deleted")
})