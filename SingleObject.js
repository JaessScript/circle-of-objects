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
        translate(this.x, this.y);
        // rotate(this.angle);
        // rect(this.x, this.y, this.size_object, this.size_object);
        imageMode(CENTER);
        scale(0.1, 0.1);
        // let theta = Math.atan(this.y / this.x);
        // rotate(theta);
        image(this.image, this.x, this.y);
        // this.angle += 0.1;
        pop();
    }
}