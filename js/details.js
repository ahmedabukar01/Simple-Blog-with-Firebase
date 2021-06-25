const content = document.querySelector('.content');
const delPost = document.querySelector('#delete');
const id = new URLSearchParams(window.location.search).get('id');

const getPost = async ()=>{
    await db.collection('posts').doc(id).get().then(snap=>{
        const post = snap.data();
        content.innerHTML = `
        <div class="post">
            <h2>${post.title}</h2>
            <small>${post.likes} likes</small>
            <p>${post.body}</p>
        </div>
        `

        delPost.classList.add('active');
     })
}

window.addEventListener('DOMContentLoaded',getPost)

//detele post

const del = async () =>{
    await db.collection('posts').doc(id).delete().then(()=>{
        console.log('deleted')
    })

    window.location.replace('/index.html')
}

delPost.addEventListener('click',del);