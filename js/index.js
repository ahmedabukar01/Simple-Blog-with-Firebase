/* const blogs = document.querySelector('.blogs');
const form = document.querySelector('form#search');

const renderPosts = async (term)=> {
    let URL = 'http://localhost:3000/posts';

    if(term){
        URL+=`?q=${term}`;
    }
    const res = await fetch(URL);
    const posts = await res.json();

    let templete = "";
    posts.forEach(post=>{
        templete += `
         <div class="posts">
            <h2>${post.title}</h2>
            <small>${post.likes} likes</small>
            <p>${post.body.slice(0,200)}</p>
            <a href="/details.html?id=${post.id}">Read more</a>
         </div>
        `;
    });
    blogs.innerHTML = templete;
}
window.addEventListener('DOMContentLoaded', ()=>{renderPosts()})

form.addEventListener('submit',e=>{
    e.preventDefault();
    renderPosts(form.term.value);
})
*/

const blogs = document.querySelector('.blogs');

db.collection('posts').get().then(snapshot=>{
    snapshot.docs.forEach(snap=>{
        const id = snap.id;
        getPosts(snap.data(),id);
    })
})

const getPosts = (post,id)=>{
    const templete = `
    <div class="posts" data-id="${id}">
        <h2>${post.title}</h2>
        <small>${post.likes} likes</small>
        <p>${post.body.slice(0,200)}</p>
        <a href="/details.html?id=${id}">Read more</a>
    </div>
    `;

    blogs.innerHTML += templete;
}