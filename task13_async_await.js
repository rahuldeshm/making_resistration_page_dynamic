console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async() => {
    const promiseWifeBringingTicket = new Promise((res,rej)=>{
        setTimeout(() => {
            res("preson3: shows ticket");
        }, 4000);
    });
    const getPopcorn = new Promise((res,rej)=>{
        setTimeout(() => {
            res(`popcorn`)
        }, 4000);
    })
    const getbutter = new Promise((res,rej)=>{
        setTimeout(() => {
            res(`Butter`)
        }, 4000);
    })
    const getcolddrinks = new Promise((res,rej)=>{
        setTimeout(() => {
            res(`colddrinks`)
        }, 4000);
    })
    const getCandy = new Promise((res,rej)=>res("candy"))
    const getcoke = new Promise((res,rej)=>res("coke"))
    let ticket = await promiseWifeBringingTicket;
    console.log(`wife come with the ${ticket}`);
    console.log("husband: lets get inside");
    console.log("wife: I am hungry");
    console.log("husband: I will get some popcorn");
    let popcorn = await getPopcorn;
    console.log(`husband says I got ${popcorn} lets go see movie`);
    console.log("wife: I need butter for my Popcorn");
    console.log("husband: I will get some butter")
    let butter = await getbutter;
    console.log(`husband: got a ${butter}`)
    console.log("I need some cold drinks");
    let colddrink = await getcolddrinks;
    console.log(`husband: got a ${colddrink}`)
    let [candy,coke] = await Promise.all([getCandy,getcoke])
    console.log(candy,coke)
    return ticket;
};
preMovie().then((m)=> console.log(m));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
