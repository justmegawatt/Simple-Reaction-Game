var showTime;
var hideTime;
var reactionTime;

function hideSpider() {
    hideTime = Date.now();
    document.getElementById("spiderbox").style.backgroundImage = "none";
    reactionTime = (hideTime-showTime)/1000;
    updateTime(reactionTime);
    main();
}

function showSpider() {
    spiderToRandomPosition();
    document.getElementById("spiderbox").style.backgroundImage = "url('spider.png')"
    showTime = Date.now();
}

function randomSeconds() {
    return 5000*Math.random();
}

function spiderToRandomPosition() {
    randomTop = 368*Math.random() + "px";
    randomLeft = 267*Math.random() + "px";
    document.getElementById("spiderbox").style.top = randomTop;
    document.getElementById("spiderbox").style.left = randomLeft;
}

function updateTime(reactionTime) {
    document.getElementById("time").innerHTML = reactionTime;
}

function main() {
    setTimeout(showSpider, randomSeconds());
}

main();