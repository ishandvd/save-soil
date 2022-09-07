const msg = document.getElementById('mainMessage')
const prog = document.getElementById('progressAmount')
const body = document.getElementsByTagName("body")[0]
const green = document.getElementById('green')
const brown = document.getElementById('brown')
const arrowOne = document.getElementById('arrowOne')

// -------------------- ISLAND FLOAT AND ANIMATION (AND ARROW)


const greenCenter = {
    x: parseFloat(getComputedStyle(green).left),
    y: parseFloat(getComputedStyle(green).top)
}

let new_y = 0.0;
let animated_value = 0.0;
let sway = 0.020;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startAnimation() {

    new_y = greenCenter.y + (5.0 * Math.sin(animated_value * sway));

    green.style.top = `${new_y}px`
    brown.style.top = `${new_y}px`
    arrowOne.style.fontSize = `${2 + Math.sin(animated_value * sway)}rem`
    animated_value++;

    requestAnimationFrame(startAnimation)
}

startAnimation()


setInterval(removeImg, 50)
let counter = 100

function removeImg(){
    if (counter < 0) {
        clearInterval(interval)
    }

    green.style.opacity = counter / 100

    counter--
}



// --------------------- SET INFOGRAPHIC TEXT

const msgs = [
    {'start': '100', 'end': '60', 'msg': 'By 2045, we will have 40% less food, and a population of 9.4 Billion.'},
    {'start': 10, 'end': 20, 'msg': 'Loading...'},


]
msg.innerText = msgs[0].msg


// ------------------ CREATE AND DISPLAY RANDOM LEAFS

const leafs = document.querySelectorAll('.fa-leaf')
console.log(leafs)

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }


leafs.forEach((leaf) => {
    // size: 40-100px
    // top: 5-70vh
    // left: 5-95vw
    // opacity: 0.2-0.5
    leaf.style.fontSize = `${getRandom(20,100)}px`;
    leaf.style.top = `${getRandom(5,70)}vh`;
    leaf.style.left = `${getRandom(30,70)}vw`;
    leaf.style.opacity = `${getRandom(10,50)/100}`;
}
)


console.log("Start: " + msgs[0].start)




// ------------------- CHANGE BACKGROUND

const start = parseInt(msgs[0].start)
const end = parseInt(msgs[0].end)
const red1 = '#F1694C'
const red2 = '#FF4444'
const green1 = '#188d3f'
const green2 = '#68e272'

let load = 0;


let interval = setInterval(blurring, 30)

async function changeBg() {
    body.style.background = `${green1}`
    await sleep(1000)
    body.style.background = `${red2}`
}

changeBg()

prog.style.backgroundColor = red1
// body.style.background = green1
// body.style.background =  red2
// body.style.background = `linear-gradient(90deg, ${red1}, ${red2})`

// ----------------- ANIMATE LOADING BAR

const calcPercent = (load, start, end) => {
    return Math.round(start + (end - start) * (load / 100));
}

function blurring () {
    load++
        if (load > 99) {
            clearInterval(interval)
        }

    let percent = calcPercent(load, start, end)

    prog.innerText = `${percent}%`
    prog.style.height = `${(percent / 100) * 50}vh`
    // loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
