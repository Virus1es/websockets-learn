import React from 'react';
import '../styles/toolbar.scss';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush"></button>
            <button className="toolbar__btn rect"></button>
            <button className="toolbar__btn circle"></button>
            <button className="toolbar__btn eraser"></button>
        </div>
    );
};

export default Toolbar;