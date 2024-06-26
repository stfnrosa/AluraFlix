import { BrowserRouter, Route, Routes} from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Inicio from "./pages/Inicio"
import NaoEncontrada from "./pages/NaoEncontrada"
import NovoVideo from "./pages/NovoVideo"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="novo-video" element={<NovoVideo />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes