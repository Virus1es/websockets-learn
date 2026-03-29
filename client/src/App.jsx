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
                        path='/:id'
                        element={
                            <>
                                <Toolbar/>
                                <SettingBar/>
                                <Canvas/>
                            </>
                    }/>
                </Routes>
                <Navigate to={`f${(+new Date).toString(16)}`} replace/>
            </div>
        </BrowserRouter>
    )
}

export default App
