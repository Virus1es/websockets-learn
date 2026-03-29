import './styles/app.scss'
import Toolbar from "./components/Toolbar.jsx";
import SettingBar from "./components/SettingBar.jsx";
import Canvas from "./components/Canvas.jsx";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={`f${(+new Date).toString(16)}`} replace />}
                    />
                    <Route
                        path='/:id'
                        element={
                            <>
                                <Toolbar/>
                                <SettingBar/>
                                <Canvas/>
                            </>
                    }/>
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
