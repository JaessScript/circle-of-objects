class CircleOfObjects {

    constructor(x, y, r, nb_objects, size_object, angle, speed, image) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.nb_objects = nb_objects;
        this.size_object = size_object;
        this.angle = angle;
        this.speed = speed;
        this.image = image;
    }

    createObjects() {
        let theObjects = [];
        let theta = [];
        for (let i = 0; i < this.nb_objects; i++) {
            let x = 0 + this.r * Math.cos(((2 * PI) / this.nb_objects) * i);
            let y = 0 + this.r * Math.sin(((2 * PI) / this.nb_objects) * i);
            theta.push(Math.atan(y / x));
            let obj = new SingleObject(x, y, this.size_object, PI / 6, this.image);
            theObjects.push(obj);
            print(theta[i]);
        }
        return theObjects;
    }

    show() {
        push();
        let tempArrayObject = this.createObjects();
        translate(this.x, this.y);
        rotate(this.angle);
        for (let i = 0; i < this.nb_objects; i++) {
            tempArrayObject[i].show();
            strokeWeight(3);
            stroke(255);
            line(0, 0, tempArrayObject[i].x, tempArrayObject[i].y);
        }
        this.angle += this.speed;
        pop();
    }
}