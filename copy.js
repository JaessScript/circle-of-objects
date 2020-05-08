// Background colour
let bgcolour;

// Big wheel characteristics
let radius = 200;
let angle; // angle of rotation of the big wheel
let speed; // speed of rotation of the big wheel
let size; // size of the shape in the centre of the big wheel

let size_w = 30; // width = height of each wagon
let angle_w; // angle between each wagon
let nb_wagons = 16; // number of wagons
let wagons = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    bgcolour = 30;
    rectMode(CENTER);

    // Compute the angle between each wagon
    angle_w = (2 * PI) / nb_wagons;

    angle = angle_w;
    speed = 0.01;
    size = width * height * 0.00003;

    // Create each wagon at equal distance from each other and from a centre located in (0,0)
    for (let i = 0; i < nb_wagons; i++) {
        let x = 0 + radius * Math.cos(angle_w * i);
        let y = 0 + radius * Math.sin(angle_w * i);
        let w = new Wagon(x, y, size_w);
        wagons.push(w);
    }
}

function draw() {
    background(bgcolour);

    // Tranlate the centre from (0,0) to the centre of the canvas (windowWidth / 2, windowHeight / 2)
    translate(windowWidth / 4, windowHeight / 4);
    // Rotate the wagons around the new centre
    rotate(angle);

    // Draw a square at the new centre (windowWidth / 2, windowHeight / 2)
    rect(0, 0, size, size);

    // Draw each wagon
    for (let i = 0; i < nb_wagons; i++) {
        wagons[i].show();
    }
    angle += speed;
}