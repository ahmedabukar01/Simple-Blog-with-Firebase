const blogs = document.querySelector('.blogs');
const searchForm = document.querySelector('#search');

const renderPost = async (term) =>{
  await db.collection('posts').onSnapshot(snapshot=>{
      snapshot.docChanges().forEach(change=>{
          const type =  change.type;
          const id = change.doc.id;
          if(type === 'added'){
              showPost(change.doc.data(),id);
          }
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
