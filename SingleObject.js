class SingleObject {
    constructor(x, y, size_object, angle, image) {
        this.x = x;
        this.y = y;
        this.size_object = size_object;
        this.angle = angle;
        this.image = image;
    }

    show() {
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        translate(this.x, this.y);
        scale(0.03, 0.03);
        // scale(0.1, 0.1);
        console.log(`angle: ${this.angle}`);
        let adjustedAngle = this.angle;
        rotate(adjustedAngle);
        // rect(this.x, this.y, this.size_object, this.size_object);
        // let theta = Math.atan(this.y / this.x);
        // rotate(theta);
        image(this.image, this.x, this.y);
        // this.angle += 0.1;
        pop();
    }
}