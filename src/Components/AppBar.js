import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, Typography, Box ,} from '@material-ui/core';
//import ReactPlayer from "react-player";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "../style.css";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";



const useStyles = makeStyles((theme) => ({
    bgtextfield: {
        width: 850,
        height:50,
        backgroundColor: "white",
        borderWidth: 5,
        outline:"none",
        border:"none",
        paddingLeft:20,
        fontSize:20,
        [theme.breakpoints.between('xs', 'sm')]: {
            width: 260,
            marginLeft:20,
            height:30,
            fontSize:14,

        }
    },
    
    textblock:{
        marginTop:30,
        [theme.breakpoints.between('xs','sm')]:{
            marginLeft:25,
            marginTop:60,
        }
    },
    title:{
        color:"white",
        fontWeight:700,
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:20,
            marginLeft:20,
            
        }
    },
    subtitle:{
        color:"white",
        fontWeight:500,
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:14,
            marginLeft:20,

        }
    },
    
}))




const Appbar = () => {
    const classes = useStyles();

    //Context Hook
   
    
    
    const [textvalue,setTextValue]=useState();

   

    return (
        <>
           <Navbar/>
            
            
            <div class="image" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className={classes.textblock}>
                    <Typography variant="h1" className={classes.title}>MovieWeb.</Typography>
                    <Typography variant="h6" className={classes.subtitle} >Where all things are available.just connect your earphones and start.</Typography>
                    <div style={{ marginTop: 20 }}>
                        <input 
                        style={{borderRadius:30}}
                        type="text" 
                        placeholder='Search'
                        value={textvalue}
                        onChange={(e)=>{setTextValue(e.target.value)}}
                        className={classes.bgtextfield} />
                    </div>
                </div>
            </div>
           




        </>
    )
}

export default Appbar;

