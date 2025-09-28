import { ffwindow } from "./ff-window.js";

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
let i = new Image();

function init() {
    i = ffwindow("Test.");
}

function update() {
    
}

function render() {
    // clear canvas
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,800,600);
    // draw image
    ctx.drawImage(i, 100, 100);
}

function run() {
    update();
    render();
    requestAnimationFrame(run);
}

init();
run();