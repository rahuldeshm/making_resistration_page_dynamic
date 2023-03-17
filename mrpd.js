const posts = [
    { title: 'Post One', body: 'This is postone'},
    { title: 'Post two', body: 'This is posttwo'}
];
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            posts.push(post);
            const err = false;
            if (!err){
                res()
            }else{
                rej('Error is occured')
            }
            
        }, 100);
    })
    
}


//task_7//
// create delete function for deleting items.
// createPost({ title: 'Post Three', body: 'This is postThree'})
//     .then(getPosts)
//     .catch(err=>console.log(err))


//task_12//
//Promice all//

// const promice1= Promise.resolve("hello World");
// const promice2= 10;
// const promice3= new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("hello World");
//     }, 2000)
// })
// // const promice4 = fetch()
// Promise.all([promice1,promice2,promice3,]).then(values => console.log(values));
function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            posts.pop()
            res()
        }, 3000);
    })
}

var lastActivity =new Date();
function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(new Date())
        }, 1000);
    })
}

Promise.all([createPost({ title: 'Post Three', body: 'This is postThree'}),updateLastUserActivityTime()])
    .then((x)=>{
        console.log(posts)
        lastActivity=x[1]
        console.log(lastActivity)
        Promise.all([deletePost(),updateLastUserActivityTime()])
        .then((x)=>{
            console.log(posts);
            lastActivity=x[1]
            console.log(lastActivity)
        })
    })
