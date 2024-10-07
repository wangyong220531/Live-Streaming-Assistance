import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import "./App.css"
import About from "./pages/BabyNaming"
import OwnerAvatorCustomize from "./pages/OwnerAvatorCustomize"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/babyNaming" element={<About />}></Route>
        <Route path="/ownerAvatorCustomize" element={<OwnerAvatorCustomize />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
