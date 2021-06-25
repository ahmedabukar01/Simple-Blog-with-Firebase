/* const content = document.querySelector('.content');
const delPost = document.querySelector('#delete');

const id = new URLSearchParams(window.location.search).get('id');
console.log(id);

window.addEventListener('DOMContentLoaded',async(e)=>{
    const URL = 'http://localhost:3000/posts/';
    const res = await fetch(URL+id);
    const post = await res.json();
    content.innerHTML = `
    <div class="post">
    <h2>${post.title}</h2>
    <small>${post.likes} likes</small>
    <p>${post.body}</p>
 </div>
    `
})

delPost.addEventListener('click', async (e)=>{
    await fetch('http://localhost:3000/posts/'+id,{
        method: 'DELETE'
    })

    window.location.replace('/index.html');
    
})
*/

const id = new URLSearchParams(window.location.search).get('id');
