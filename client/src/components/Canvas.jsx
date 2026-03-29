import React, {useEffect, useRef, useState} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState.js";
import toolState from "../store/toolState.js";
import Brush from "../tools/Brush.js";
import {Button, Modal} from "react-bootstrap";
import {useParams} from "react-router-dom";

const Canvas = observer (() => {

    const canvasRef = useRef(null);

    const usernameRef = useRef(null);

    const [modal, setModal] = useState(true);

    const params = useParams();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current));
    }, []);

    useEffect(() => {
        if(canvasState.username) {
            const socket = new WebSocket('ws://localhost:5000/');
            socket.onopen = () => {
                console.log('Connection set');
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.username,
                    method: "connection"
                }))
            }
            socket.onmessage = (event) => {
                console.log(event.data);
            }
        }
    }, [canvasState.username]);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL());
    };

    const connectionHandler = () => {
        canvasState.setUsername(usernameRef.current.value);
        setModal(false);
    }

    return (
        <div className="canvas">
            <Modal show={modal} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите ваше имя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={usernameRef} type="text"/>
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