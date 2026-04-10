import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function PublicLayout() {
  return (
    <div>
      <Header/>

      <main>
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}