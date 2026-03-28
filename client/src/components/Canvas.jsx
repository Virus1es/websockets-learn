import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState.js";

const Canvas = observer (() => {

    const canvasRef = useRef(null);


    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
    }, [canvasRef]);

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={600} height={400}/>
        </div>
    );
});

export default Canvas;