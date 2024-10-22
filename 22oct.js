let per1={
    FirstName : "Ananya",
    sayName:function(){
        console.log(this.FirstName);
    }
}

let per2 = {
    FirstName: "Tanya"
}

let res = per1.sayName.bind(per2)
res();