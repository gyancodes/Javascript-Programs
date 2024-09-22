let count = 30;

const countdown = setInterval(() => {
    console.log(count);

    if(count === 0){
        clearInterval(countdown)
    }
    count--;
}, 1000);