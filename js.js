let input = document.querySelector('#input')
let sendBtn = document.querySelector('#btn')
let body = document.querySelector('body')

let son = 0
sendBtn.addEventListener('click', () => {
    let label = document.createElement('span')
    label.className = "text-[40px] "
    let text = document.createElement('input')
    son++
    body.className = "relative"
    let container = document.createElement('div')
    container.className = "items-center flex gap-2 justify-center "
    text.type = "checkbox"
    text.className = "w-[50px] h-[50px]"
    label.textContent = input.value + "" + "#" + son
    container.prepend(text, label)
    body.prepend(container)
    let xax = document.querySelector('#xax')
    xax.prepend(container)
    xax.className = "mt-[20px]"
    text.addEventListener('click', () => {
        label.style.textDecoration = "line-through"
    })
    let h1 = document.querySelector('h1')
    let night = document.querySelector('#night')
    night.addEventListener('click', () => {
        body.className = "bg-black"
        h1.style.color = "white"
        label.classList.add("text-white")
    })
})




