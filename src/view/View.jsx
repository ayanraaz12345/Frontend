import { Outlet } from "react-router-dom";
import TopNavbar from "./utility components/top navbar/TopNavbar";
import Footer from "./utility components/footer/Footer";

export default function View(){
   return(
      <>
         <TopNavbar/>
         {<Outlet/>}
         {/*  footer*/}
         <Footer/>
      </>
   )
}