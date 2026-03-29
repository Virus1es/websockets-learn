import React, {useState} from 'react';
import '../styles/toolbar.scss';
import toolState from "../store/toolState.js";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии:</label>
            <input type="number"
                   id="line-width"
                   defaultValue={1}
                   onChange={(e) => toolState.setLineWidth(Number(e.target.value))}
                   style={{width: '3%'}}
                   min={1}
                   max={50}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input id="stroke-color" type="color" />
        </div>
    );
};

export default SettingBar;