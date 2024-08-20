const spinnerWrapperEl =document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
    setTimeout(() =>{
        spinnerWrapperEl.style.display='none';
    } ,800)
    spinnerWrapperEl.style.opacity='0';
});


// Toast

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
};


// let passCode='friendzone';
// let userCode=prompt("Enter PassWord to access this WebPage :");

// while(passCode!==userCode){
//     userCode=prompt("Nope that's not the right password! Try again or contact with the developer :")
// }
// console.log("Welcome ! You guessed the right password");
