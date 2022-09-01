// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  setTimeout(() => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
  }, 1000);
});

getInstruction('mashedPotatoes', 1, (step1) => {
  setTimeout(() => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  }, 2000);
});

getInstruction('mashedPotatoes', 2, (step2) => {
  setTimeout(() => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
  }, 3000);
});

getInstruction('mashedPotatoes', 3, (step3) => {
  setTimeout(() => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
  }, 4000);
});

getInstruction('mashedPotatoes', 4, (step4) => {
  setTimeout(() => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
  }, 5000);
});

setTimeout(() => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>Mashed potatoes are ready!</li>`;
}, 7000);

setTimeout(() => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>Eat your meat too! You can't have any pudding if you don't eat your meat.</li>`;
}, 8000);



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
  })
  // ... Your code here




  
// Iteration 3 using async/await
// ...




// Bonus 2 - Promise all
// ...