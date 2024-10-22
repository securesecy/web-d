let str = "The Sky is blue"
let ans= str.split(" ").reverse().join(" ");
console.log(ans);

let res= str.split(" ");
let str1 = "";
for(let i =0; i<res.length; i++){
    str1 = str1+res[i].split("").reverse().join("")+" ";
}
console.log(str1);
let ans2 = str.split(" ").reverse().join(" ");
console.log(ans2);



let user1={
    Name1:"Rohit",
    fun: function(){
        console.log(this.Name1);
    }
}
user1.fun();





