
 let fetch = require('node-fetch');
 let fs = require('fs');
fetch("http://jsonplaceholder.typicode.com/posts")
.then(res => res.text())
.then(text => fs.writeFileSync('posts.txt', text))
 

