const form = document.querySelector('form#create');
const createPost = async ()=>{
    const data = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,
    }
    console.log('called')
    await db.collection('posts').add(data).then(()=>{
        console.log('added');
    }).catch(err=>console.log(err));

    window.location.replace('/index.html')

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    createPost();
});