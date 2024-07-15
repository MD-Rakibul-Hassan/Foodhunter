import { Outlet } from "react-router-dom";
import use_Context from "./Hooks/Get_Context_Data/use_Context"
import Navbar from "./Componets/Navbar/Navbar";

function App() {
  const { name } = use_Context();
  return (
    <>
      {/* Navbar com */}
      <Navbar />
      <Outlet />
      {/* Footer com  */}
    </>
  )
}

export default App
