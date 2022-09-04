const msg = document.getElementById('mainMessage')
const prog = document.getElementById('progressAmount')
const body = document.getElementsByTagName("body")[0]


const msgs = [
    {'start': '100', 'end': '60', 'msg': 'By 2045, we will have 40% less food, and a population of 9.4 Billion.'},
    {'start': 10, 'end': 20, 'msg': 'Loading...'},


]

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

msg.innerText = msgs[0].msg

console.log("Start: " + msgs[0].start)

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

changeBg()

prog.style.backgroundColor = red1
// body.style.background = green1
// body.style.background =  red2
// body.style.background = `linear-gradient(90deg, ${red1}, ${red2})`

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
