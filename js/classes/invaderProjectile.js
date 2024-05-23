class InvaderPrjectile {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.width =3;
        this.height = 10;
    }   
    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}