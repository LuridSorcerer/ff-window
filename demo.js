import { ffwindow } from "./ff-window.js";

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
ctx.imageSmoothingEnabled=false;
ctx.scale(4,4); 
let i = new Image();

function init() {
    document.getElementById("msg").addEventListener("change",update);
}

function update() {
    msg = document.getElementById("msg").value;
    i = ffwindow(msg);
}

function render() {
    // clear canvas
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,800,600);
    ctx.drawImage(i, 10, 10);
}

function run() {
    update();
    render();
    requestAnimationFrame(run);
}

init();
run();