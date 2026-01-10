import { Outlet } from "react-router-dom";
import ApiCalling from "./components/ApiCalling";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(){
  return(
    <div>
      {/* <ApiCalling /> */}
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;