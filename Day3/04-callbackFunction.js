

function add(a,b,subtract){ 
    
/* // a=10, b=20, subtract = function subtract(){
                            console.log("After subtraction:");
    
                                } */
 const sum= a+b // 30
 console.log("Sum:",sum); 

  subtract(sum) // subtract(30)    
}

function subtract(c){ // sum = result
    console.log("After subtraction:",c-5); // 30-5 =25
}


add(10,20)

