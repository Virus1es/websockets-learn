import Tool from "./Tool.js";

export default class Line extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath();
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            this.draw(this.startX, this.startY, e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    draw(startX, startY, endX, endY) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.fill();
            this.ctx.stroke();
        };
    }
}