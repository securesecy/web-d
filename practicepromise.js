function checkEvenOrOdd() {  
    return new Promise((resolve, reject) => {  
        let number = Math.floor(Math.random() * 40) + 1;  

        if (number % 2 === 0) {  
            resolve(`The number ${number} is even.`);  
        } else if (number % 2 !== 0) {  
            reject(`The number ${number} is odd.`);  
        } else {   
            console.log('Pending: No number generated.');  
        }  
    });  
}  

 
checkEvenOrOdd()  
    .then(result => console.log(result))  
    .catch(error => console.error(error));