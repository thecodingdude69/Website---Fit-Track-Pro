const activeBtn1 = document.querySelector("#activeBtn1");
const activeBtn2 = document.querySelector("#activeBtn2");
const activeBtn3 = document.querySelector("#activeBtn3");
const activeBtn4 = document.querySelector("#activeBtn4");
const activeBtn5 = document.querySelector("#activeBtn5");
const activeBtn6 = document.querySelector("#activeBtn6");
const EmojiButton = document.querySelector("#EmojiButton");
const StreakCountBtn = document.querySelector("#StreakCountBtn");
const totalWorkoutCount = document.querySelector("#totalWorkoutCount");
const caloriescount = document.querySelector("#caloriescount");
const minutescount = document.querySelector("#minutescount");
const notification = document.querySelector("#notification");
const repCounter = document.querySelector("#repCounter");
let workoutArray = [];
let calCount = Number(caloriescount.textContent);
let gloabaltime = Number(minutescount.textContent);
let repscount = Number(repCounter.textContent);
let streakCount = 0;
function updatetotalWorkoutCount(title){
    let count = totalWorkoutCount.textContent;
    for(const val of workoutArray){
        if(val === title){
            return ;
        }
    }
    workoutArray.push(title);
    count = Number(count);
    count++;
    totalWorkoutCount.textContent = count;
}
function updatecaloriescount(calories){
    calories = Number(calories);
    calCount += calories;
    caloriescount.textContent = calCount;
}
function updateminutescount(time){
    time = Number(time);
    gloabaltime += time;
    minutescount.textContent = gloabaltime;
}
function updaterepCounter(){
    repscount++;
    repCounter.textContent = repscount;
}
function notificationMaker(time,calories,title){
    const div1 = document.createElement("div");
    notification.appendChild(div1);
    div1.classList.add("activity");
    const p1 = document.createElement("p");
    div1.appendChild(p1);
    p1.classList.add("activityContent");
    p1.textContent = `Congratulations, you have completed a rep of ${title}`;
    const div2 = document.createElement("div");
    notification.appendChild(div2);
    div2.classList.add("activity");
    const p2 = document.createElement("p");
    div2.appendChild(p2);
    p2.classList.add("activityContent");
    p2.textContent = `It took you ${time} minutes and it burned ${calories} calories`;
    notification.scrollTop = notification.scrollHeight;
}
function streaknotificationMaker(){
    streakCount++;
    const div = document.createElement("div");
    notification.appendChild(div);
    div.classList.add("activity");
    const p = document.createElement("p");
    div.appendChild(p);
    p.classList.add("activityContent");
    if(streakCount === 1){
        p.textContent = `Well done, you're now on ${streakCount} day streak`;
        StreakCountBtn.textContent = `🔥 ${streakCount} Day Streak`;
    }
    else{
        p.textContent = `Well done, you're now on ${streakCount} days streak`;
        StreakCountBtn.textContent = `🔥 ${streakCount} Day Streak`;
    }
    notification.scrollTop = notification.scrollHeight;
}
EmojiButton.addEventListener("click",streaknotificationMaker);
activeBtn1.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn1.dataset.title);
    updatecaloriescount(activeBtn1.dataset.calories);
    updateminutescount(activeBtn1.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn1.dataset.time,activeBtn1.dataset.calories,activeBtn1.dataset.title);
});
activeBtn2.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn2.dataset.title);
    updatecaloriescount(activeBtn2.dataset.calories);
    updateminutescount(activeBtn2.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn2.dataset.time,activeBtn2.dataset.calories,activeBtn2.dataset.title);
});
activeBtn3.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn3.dataset.title);
    updatecaloriescount(activeBtn3.dataset.calories);
    updateminutescount(activeBtn3.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn3.dataset.time,activeBtn3.dataset.calories,activeBtn3.dataset.title);
});
activeBtn4.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn4.dataset.title);
    updatecaloriescount(activeBtn4.dataset.calories);
    updateminutescount(activeBtn4.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn4.dataset.time,activeBtn4.dataset.calories,activeBtn4.dataset.title);
});
activeBtn5.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn5.dataset.title);
    updatecaloriescount(activeBtn5.dataset.calories);
    updateminutescount(activeBtn5.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn5.dataset.time,activeBtn5.dataset.calories,activeBtn5.dataset.title);
});
activeBtn6.addEventListener("click",() =>{
    updatetotalWorkoutCount(activeBtn6.dataset.title);
    updatecaloriescount(activeBtn6.dataset.calories);
    updateminutescount(activeBtn6.dataset.time);
    updaterepCounter();
    notificationMaker(activeBtn6.dataset.time,activeBtn6.dataset.calories,activeBtn6.dataset.title);
});