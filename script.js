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
