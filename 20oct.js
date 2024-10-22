let Person1={
    sayname:function(){
        return this.name;
    }
}

let Person2 = {
    name:"abc"
}

console.log(Person1.sayname.call(Person2));





let Per1={
    sayname:function(){
        return greet+" " +this.name;
    }
}

let Per2 = {
    name:"abc"
}

console.log(Per1.sayname.apply(Per2,["welcome"]));