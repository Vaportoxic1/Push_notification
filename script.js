let Success = document.getElementById("Success");
let Error = document.getElementById("Error");
let Invalid = document.getElementById("Invalid");
let ToastBox = document.getElementById("toastbox");

function showToast(check){
    if(check === 'success'){
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successly submitted';
        ToastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }else if(check === 'error'){
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Plese fix the Error';
        ToastBox.appendChild(toast);
        toast.classList.add('error');
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }else if(check === 'invalid'){
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
        ToastBox.appendChild(toast);
        toast.classList.add('invalid');
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
}

Success.addEventListener("click", ()=>{
    let status = 'success';
    showToast(status);
});
Error.addEventListener("click", ()=>{
    let status = 'error';
    showToast(status);
});
Invalid.addEventListener("click", ()=>{
    let status = 'invalid';
    showToast(status);
});