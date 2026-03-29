import Brush from "./Brush.js";

export default class Eraser extends Brush {
    constructor(canvas) {
        super(canvas);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
        this.ctx.strokeStyle = this.previosColor;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath();
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        this.previosColor = this.ctx.strokeStyle;
    }

    draw(x, y) {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}