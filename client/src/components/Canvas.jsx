import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState.js";
import toolState from "../store/toolState.js";
import Brush from "../tools/Brush.js";
import {Button, Modal} from "react-bootstrap";

const Canvas = observer (() => {

    const canvasRef = useRef(null);


    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current));
    }, []);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL());
    };

    const connectionHandler = () => {

    }

    return (
        <div className="canvas">
            <Modal show={true} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите ваше имя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectionHandler()}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas
                ref={canvasRef}
                width={600}
                height={400}
                onMouseDown={() => mouseDownHandler()}
            />
        </div>
    );
});

export default Canvas;