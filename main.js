const btn = document.getElementById("btn1")
const secBtn = document.getElementById("btn2")
const h = document.getElementById("h1")
const div1 = document.getElementById("bg")
const p = document.getElementById("p")
const time = document.getElementById("time")
const day = document.getElementById("day")
let good = document.querySelector("h2")


// pengaturan tampilan waktu
let currentDateTime = new Date();
let currentHours = currentDateTime.getHours()
let currentMinutes = currentDateTime.getMinutes()
let currentDate = currentDateTime.toDateString()

let name;
do {
    name = prompt("silahkan masukan nama kakak😊")
} while (!name || name.trim() === "")
if (currentHours >= 4 && currentHours <= 9) {
    good.textContent = `Good Morning, ${name}!`
} else if (currentHours >= 10 && currentHours <= 14) {
    good.textContent = `Good Afternoon, ${name}!`
} else if (currentHours >= 15 && currentHours <= 18) {
    good.textContent = `Good Evening, ${name}!`
} else {
    good.textContent = `Good Night, ${name}!`
}
function Time(num) {
    return ("0" + num).slice(-2)
}
let currentTime = Time(currentHours) + ":" + Time(currentMinutes)

time.textContent = currentTime
day.textContent = currentDate



    const colors = ["antiquewhite", "midnightblue" , "orange", "aquamarine"]
    let colorCount = 0


function changebg(color) {
    document.body.style.backgroundColor = color
    // localStorage.setItem()
}




btn.addEventListener('click', (function () {
    let coloros = colors[colorCount]
    changebg(coloros)
    colorCount = (colorCount + 1) % colors.length
}))

function changeText(text, textt) {
    h.textContent = text
    p.textContent = textt
}

secBtn.addEventListener('click', function () {
    console.log("tombol 2 di klik")
    changeText(prompt("isi teks untuk di tampilkan hehe"), "waduh ke ganti")
})