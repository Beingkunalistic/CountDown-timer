const endDate = "22 November 2023 00:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.getElementsByTagName("input")
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 % 24);
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    // convert into days
}
clock();9

setInterval(
    () => {
        clock()
    },
    1000
)


/**
 * 1 day = 24 hours
 * 1 hour = 60 mins
 * 60 mins = 3600 seconds
 */