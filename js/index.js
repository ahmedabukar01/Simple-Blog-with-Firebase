
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