
const blogs = document.querySelector('.blogs');
const searchForm = document.querySelector('#search');

const renderPost = async (term) =>{
     db.collection('posts').get().then(snapshot=>{
            snapshot.docs.forEach(snap=>{
            const id = snap.id;
            let data = snap.data();
            showPost(data,id);
        })
    })
}

window.addEventListener('DOMContentLoaded',(e)=>renderPost());

const showPost = (post,id)=>{
    let templete ="";
   if(post){
    templete = `
   <div class="posts" data-id="${id}">
       <h2>${post.title}</h2>
       <small>${post.likes} likes</small>
       <p>${post.body.slice(0,200)}</p>
       <a href="/details.html?id=${id}">Read more</a>
   </div>
   `;
   }

    blogs.innerHTML += templete;
}

// search will add later

// searchForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const term = searchForm.term.value;
//     console.log(term)
//     renderPost(term)
// });
