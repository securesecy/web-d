//Settimeout

setTimeout(()=>{
    console.log("this fn. will execute after 3sec.");
},3000);


let id = setInterval(()=>{
    console.log("this fn. will execute after every 1 sec");
},1000);

console.log(id);


setTimeout(()=>{
    clearInterval(id);
},10000);