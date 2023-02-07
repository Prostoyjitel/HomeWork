//stopWatch

const stopWatch = document.querySelector("#stopwatch");
let timer = 0;
let interval;

let stopwatch = () =>{
    interval = setInterval(()=>{
        timer++;
        let hours = Math.floor(timer/3600);
        let minutes = Math.floor((timer % 3600)/60);
        let seconds = timer % 60;
        stopWatch.innerText =` ${hours < 10 ? '0' + hours : hours} : ${minutes  < 10 ? '0' + minutes : minutes} : ${seconds  < 10 ? '0' + seconds : seconds}`
    },1000)
}

document.querySelector("#start").addEventListener("click", stopwatch)

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(interval)
})
document.querySelector("#clear").addEventListener("click", ()=>{
    stopWatch.innerText = "00:00:00";
    timer = 0;
    clearInterval(interval);
})


// traffic light

// const color = document.querySelectorAll('.light')
// let traffic = 0;

    // function trafficLight(){
    //       setInterval(() => {
    //         if(traffic === 0){
    //             color.item(0).style.backgroundColor = 'red';
    //             color.item(1).style.backgroundColor = 'grey';
    //             color.item(2).style.backgroundColor = 'grey';
    //             traffic++
    //         } else if(traffic === 1){
    //                 color.item(0).style.backgroundColor = 'grey';
    //                 color.item(1).style.backgroundColor = 'yellow';
    //                 color.item(2).style.backgroundColor = 'grey';
    //                 traffic++;
    //         } else if(traffic === 2) {
    //                 color.item(0).style.backgroundColor = 'grey';
    //                 color.item(1).style.backgroundColor = 'grey';
    //                 color.item(2).style.backgroundColor = 'green';
    //                 traffic = 3;
    //         }else if(traffic === 3){
    //             color.item(0).style.backgroundColor = 'grey';
    //             color.item(1).style.backgroundColor = 'yellow';
    //             color.item(2).style.backgroundColor = 'grey';
    //             traffic = 0
    //         }
            
    //     }, 2000)
    // }
    
    // trafficLight()