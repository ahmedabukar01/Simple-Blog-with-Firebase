/* const form = document.querySelector('form#create');
const createPost = async ()=>{
    const data = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,
    }
    await fetch('http://localhost:3000/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'Application/json'}
    });

    window.location.replace('/index.html');
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    createPost()
});
*/