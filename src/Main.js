import React,{useState} from 'react'
import Appbar from "./Components/AppBar";
import Swipe from "./Components/Swipe";
import Rest from "./Components/Rest";
import Footer from './Components/Footer';
//import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const Main = () => {

    const [toggleDark, settoggleDark] = useState(false);
 
    return (
        <>
       
        <div>
           
            <Appbar/>
            
            <Swipe toggleDark={toggleDark} settoggleDark={settoggleDark}/>
           
            <Rest/>
            <Footer/>
            
        </div>
       
        </>
    )
}

export default Main;
