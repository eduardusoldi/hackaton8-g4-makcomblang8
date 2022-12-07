const data = [
    {
        name: 'Indra',
        description: 'makan'
    },
    {
        name: 'Adiz',
        description: 'Tidur'
    },
    {
        name: 'Kukuh',
        description: 'lari'
    },
    {
        name: 'Joce',
        description: 'Belajar'
    },

]

// const mainDiv = document.getElementById('main')
// const inputText = document.querySelector('#input-text')
// // console.log(mainDiv)
// GUNAKAN FUNCTION RENDER UNTUK MANGGIL PAGE

const mainDiv = document.getElementById('main')
function clearBox()
{
    document.getElementById("main").innerHTML = "";
}
function render(){
    clearBox()
for (let i = 0; i < data.length; i++) {
    const newDiv = document.createElement('div')
    const title = document.createElement('h3')
    const description = document.createElement('p')
    newDiv.className = 'list-main'
    title.className = 'list-child'
    description.className = 'list-child'
    title.innerText = data[i].name
    description.innerText = data[i].description
    newDiv.appendChild(title)
    newDiv.appendChild(description)
    mainDiv.appendChild(newDiv)
}
}
render()

// inputText.addEventListener('input', function ngisi(e) {
//     let isiSementara = e.target.value
//     return isiSementara
// })

// function submit(e) {
//     console.log(ngisi(e))

// }

// // Element.addEventListener('click', submit)

function tombol() {
    let inputnya = document.getElementById("userInput").value;
    let inputnya2 =  document.getElementById("userInput2").value;
    let object = {}
    object.name = inputnya2
    object.description = inputnya
    data.push(object)
    console.log(data)
    render()
}






