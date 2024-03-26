// Code your solutions in this file

function writeCards(names=[],eventName="gift"){
    const messages=[];
    for (let i=0; i<names.length;i++){
        const message= `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        messages.push(message);

    }

     return messages;
}

const result=writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");
console.log(result);



function countDown(startingNumber) {
    
    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; 
    }
  }
  
 
  countDown(10);
  