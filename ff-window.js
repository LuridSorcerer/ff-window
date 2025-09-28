let font = new Image;
font.src = "Font.png";

const charmap = new Map();

charmap.set("0", {r:0,c:0});
charmap.set("1", {r:0,c:1});
charmap.set("2", {r:0,c:2});
charmap.set("3", {r:0,c:3});
charmap.set("4", {r:0,c:4});
charmap.set("5", {r:0,c:5});
charmap.set("6", {r:0,c:6});
charmap.set("7", {r:0,c:7});
charmap.set("8", {r:0,c:8});
charmap.set("9", {r:0,c:9});

charmap.set("A", {r:1,c:0});
charmap.set("B", {r:1,c:1});
charmap.set("C", {r:1,c:2});
charmap.set("D", {r:1,c:3});
charmap.set("E", {r:1,c:4});
charmap.set("F", {r:1,c:5});
charmap.set("G", {r:1,c:6});
charmap.set("H", {r:1,c:7});
charmap.set("I", {r:1,c:8});
charmap.set("J", {r:1,c:9});
charmap.set("K", {r:1,c:10});
charmap.set("L", {r:1,c:11});
charmap.set("M", {r:1,c:12});
charmap.set("N", {r:1,c:13});
charmap.set("O", {r:1,c:14});
charmap.set("P", {r:1,c:15});
charmap.set("Q", {r:2,c:0});
charmap.set("R", {r:2,c:1});
charmap.set("S", {r:2,c:2});
charmap.set("T", {r:2,c:3});
charmap.set("U", {r:2,c:4});
charmap.set("V", {r:2,c:5});
charmap.set("W", {r:2,c:6});
charmap.set("X", {r:2,c:7});
charmap.set("Y", {r:2,c:8});
charmap.set("Z", {r:2,c:9});

charmap.set("a", {r:3,c:0});
charmap.set("b", {r:3,c:1});
charmap.set("c", {r:3,c:2});
charmap.set("d", {r:3,c:3});
charmap.set("e", {r:3,c:4});
charmap.set("f", {r:3,c:5});
charmap.set("g", {r:3,c:6});
charmap.set("h", {r:3,c:7});
charmap.set("i", {r:3,c:8});
charmap.set("j", {r:3,c:9});
charmap.set("k", {r:3,c:10});
charmap.set("l", {r:3,c:11});
charmap.set("m", {r:3,c:12});
charmap.set("n", {r:3,c:13});
charmap.set("o", {r:3,c:14});
charmap.set("p", {r:3,c:15});
charmap.set("q", {r:4,c:0});
charmap.set("r", {r:4,c:1});
charmap.set("s", {r:4,c:2});
charmap.set("t", {r:4,c:3});
charmap.set("u", {r:4,c:4});
charmap.set("v", {r:4,c:5});
charmap.set("w", {r:4,c:6});
charmap.set("x", {r:4,c:7});
charmap.set("y", {r:4,c:8});
charmap.set("z", {r:4,c:9});

charmap.set(" ", {r:5,c:0});
charmap.set(".", {r:5,c:1});
charmap.set(",", {r:5,c:2});
charmap.set("!", {r:5,c:3});
charmap.set("?", {r:5,c:4});
charmap.set("$", {r:5,c:5});
charmap.set("#", {r:5,c:6});
charmap.set("%", {r:5,c:7});
charmap.set("*", {r:5,c:8});
charmap.set("&", {r:5,c:9});

charmap.set("f_b", {r:6,c:0});
charmap.set("f_tl", {r:6,c:1});

export function ffwindow(...s) {
    let w = document.createElement('canvas');
    w.width = 1000;
    w.height = 1000;
    let wctx = w.getContext("2d");

    // render frame
    let htiles = 3;
    let wtiles = 10;
    for (let i = 0; i < htiles; i++) {
        for (let j = 0; j < wtiles; j++) {
            wctx.drawImage(
                font, // source image
                (charmap.get("f_b")).c*8, (charmap.get("f_b")).r*8, // source x,y
                8, 8, // source w,h
                j*8, i*8, // dest x,y
                8, 8 // dest w,h
            )
        }
    }

    // render text
    let t = "Test string #1 with A FEW !?,. symbols!";

    for (let i = 0; i < t.length; i++) {
        wctx.drawImage(
            font, // source image
            (charmap.get(t[i])).c*8, (charmap.get(t[i])).r*8, // source x,y
            8, 8, // source w,h
            i*8, 0, // dest x,y
            8, 8 // dest w,h
        )
    }

    return w;
}