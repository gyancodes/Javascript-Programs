const newYears = '1 Jan 2023';

function countdown(){
    const newYearsData= new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsData - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60 % 60);
    const seconds = Math.floor(totalSeconds % 60);
    

    console.log(totalSeconds);
 
}

countdown();


