let radii = [1, 2, 3, 4, 5];

// let area = radii.map(r => Math.PI * r * r);              
// let circ = radii.map(r => 2 * Math.PI * r);      
// let hemisphere = radii.map(r => (2/3) * Math.PI * r**3); 
// let sphere = radii.map(r => (4/3) * Math.PI * r**3);  

// let output = [area, circ, hemisphere, sphere];
// console.log(output); 
function calculate(logic){
    let res= [];
    for(let i = 0; i <= radii.length; i++){
        res.push(logic(radii[i]));
    }
    console.log(res);
}

function area(radii){
    return 3.14*radii*radii;
}

function circ(radii){
    return 3.14*2*radii;
}
function hemisphere(radii){
    return (2/3)*3.14*radii*radii*radii;
}

function sphere(radii){
    return (4/3)*3.14*radii*radii*radii;
}



calculate(area);
calculate(circ);
calculate(hemisphere);
calculate(sphere);


