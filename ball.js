class Ball {
    constructor(x, y, vy, vx, radius, color ) {
        this.x = x,
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.color = color;
    }
    draw (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if(this.y + this.vy > 600 || this.y + this.vy < 0){
            this.vy = -this.vy;
        }
        if(this.x + this.vx > 500 || this.x + this.vx < 0){
            this.vx = -this.vx;
        }
    }
}
 export { Ball }