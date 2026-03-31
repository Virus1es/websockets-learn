import React from 'react';
import '../styles/toolbar.scss';
import toolState from "../store/toolState.js";
import canvasState from "../store/canvasState.js";
import Brush from "../tools/Brush.js";
import Rect from "../tools/Rect.js";
import Circle from "../tools/Circle.js";
import Eraser from "../tools/Eraser.js";
import Line from "../tools/Line.js";

const Toolbar = () => {
    const changeColor = e => {
        toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    }

    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL();
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = canvasState.sessionId + '.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className="toolbar">
            <button className="toolbar__btn brush"
                    onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionId))}
                    title="Кисть"
            ></button>
            <button className="toolbar__btn rect"
                    onClick={() => toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionId))}
                    title="Прямоугольник"
            ></button>
            <button className="toolbar__btn circle"
                    onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
                    title="Круг"
            ></button>
            <button className="toolbar__btn eraser"
                    onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
                    title="Ластик"
            ></button>
            <button className="toolbar__btn line"
                    onClick={() => toolState.setTool(new Line(canvasState.canvas))}
                    title="Линия"
            ></button>
            <input type="color"
                   onChange={e => changeColor(e)}
                   title="Цвет заливки и обводки"
            />
            <button className="toolbar__btn undo"
                    onClick={() => canvasState.undo()}
                    title="Отмена последнего действия"
            ></button>
            <button className="toolbar__btn redo"
                    onClick={() => canvasState.redo()}
                    title="Вернуть отменённое действие"
            ></button>
            <button className="toolbar__btn save"
                    title="Сохранить изображение"
                    onClick={() => download()}
            ></button>
        </div>
    );
};

export default Toolbar;