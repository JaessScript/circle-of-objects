// Background colour
let bgcolour;

let elephant;

let x_myCircle;
let y_myCircle;
let myCircle;

let x_myCircle2;
let y_myCircle2;
let myCircle2;

function preload() {
    // elephant = loadImage('./images/indian_elephant.png');
    elephant = loadImage('./images/chinaflag3.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgcolour = 30;
    imageMode(CENTER);

    x_myCircle = width / 4;
    y_myCircle = height / 2;
    myCircle = new CircleOfObjects(x_myCircle, y_myCircle, 100, 12, 30, PI / 4, 0.01, elephant);

    x_myCircle2 = (3 * width) / 4;
    y_myCircle2 = height / 2;
    myCircle2 = new CircleOfObjects(x_myCircle2, y_myCircle2, 150, 8, 50, PI / 4, -0.02, elephant);
    // drawFun();
}

function drawFun () {
    background(bgcolour);
    myCircle.show();
    myCircle2.show();
}

function draw() {
    drawFun();
    // background(bgcolour);

    // myCircle.show();
    // myCircle2.show();
}