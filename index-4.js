const body = document.getElementsByClassName("style3")
const pencet = document.getElementById("pencet")
pencet.addEventListener("click", submit);
function submit() {
    let nama = document.getElementById("nama").value;
    let email =  document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;
    const isiPopup = document.getElementById("hasilPopup")
    isiPopup.append(nama)
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
}

function render(){
    const isiPopup = document.getElementById("hasilPopup")
    isiPopup.innerHTML = ""
    let nama = document.getElementById("nama");
    let email =  document.getElementById("email")
    let feedback = document.getElementById("feedback")
    nama.innerHTML =""
    email.innerHTML =""
    feedback.innerHTML =""
    
}

function toggle(){
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
    setTimeout(() => {
        render() 
    }, 3000);
    
}
 