import React, {useState} from 'react';
import '../styles/toolbar.scss';

const SettingBar = () => {
    const [lineWidth, setLineWidth] = useState(1);

    return (
        <div className="setting-bar">
            <p>Толщина линии:</p>
            <input type="number"
                   value={lineWidth}
                   onChange={(e) => setLineWidth(Number(e.target.value))}
                   style={{width: '3%'}}
                   min={1}
                   max={20}
            />
            <p>Цвет обводки</p>
            <input type="color" />
        </div>
    );
};

export default SettingBar;