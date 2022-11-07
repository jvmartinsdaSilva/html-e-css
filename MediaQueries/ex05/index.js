const btn = document.getElementById('menu')
let menu = false

btn.addEventListener('click', () => {
    if(!menu){
        document.getElementById('List').style.display = 'block'
        menu = true
    } else {
        document.getElementById('List').style.display = 'none'
        menu = false
    }
})

const widthDisplay = () => {
    document.getElementById('List').style.display = 'block'
    menu = true
}
