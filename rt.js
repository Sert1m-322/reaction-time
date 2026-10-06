const red = "#FF3B30";
const green = "#34C759";

const btnMain = document.getElementById("btn");
const timeT = document.getElementById("time")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")

let isGreen = false;
let isRed = false;
let waiting = true;
let timerId;
let timeoutId;
let current;


const setwait = () => {
    clearInterval(timerId)
    clearTimeout(timeoutId);
    document.body.style.backgroundColor = "white";
    isGreen = false
    isRed = false
    waiting = true
}


btnMain.addEventListener("click", (e) =>{


    if (waiting == true) {
        text2.textContent = "Don't click yet!"
        text1.textContent = "Wait for green..."
        timeT.textContent = "0.000"
        clearInterval(timerId)
        clearTimeout(timeoutId);
        document.body.style.backgroundColor = red;
        isRed = true
        waiting = false

    }else if (isGreen == true){
        setwait()
        text1.textContent = "Play Again"
        text2.textContent = `your reaction time is ${current.toFixed(3)}s`
        return

    }else{
        setwait()
        text2.textContent = "Too early! You need to wait >:|"
        text1.textContent = "Try Again"
        return
    }

    timeoutId = setTimeout(() => {
        isRed = !(isRed)
        isGreen = !(isGreen)

        text2.textContent = "Fast!"
        text1.textContent = "CLICK NOW!"

        document.body.style.backgroundColor = green;
        const startTime = performance.now();

        timerId = setInterval(() => {
            current = (performance.now() - startTime)/1000;
            timeT.textContent = current.toFixed(3);
        }, 10);

    }, Math.floor(Math.random() * 3000) + 2000); // Время задаётся в миллисекундах (1000 мс = 1 сек)

})
