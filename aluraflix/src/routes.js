import NovoVideo from "pages/NovoVideo"
import Inicio from "pages/Inicio"
import NaoEncontrada from "pages/NaoEncontrada"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>                            
                    <Route index element={<Inicio/>}></Route>
                    <Route path="novo-video" element={<NovoVideo/>}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                  
        
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes