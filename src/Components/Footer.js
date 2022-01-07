import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyle=makeStyles((theme)=>({
    container:{
        height:"200px",
        backgroundColor:"black",
        marginTop:5,
        [theme.breakpoints.between('xs','sm')]:{
            height:"180px"
        }
        
    },
    typographygrp:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        paddingTop:40,
        
       },
       typography:{
           color:"white",
           fontSize:18,
           [theme.breakpoints.between('xs','sm')]:{
           fontSize:15,
           marginTop:5
          
           }
        },
        textbox:{
            [theme.breakpoints.between('xs','sm')]:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:300,
           paddingLeft:10,
           marginTop:5
           
            }
        }
        
        
       
}));

const Footer = () => {
    const classes=useStyle();
    return (
        <div className={classes.container}>
           <div className={classes.typographygrp}>
               <div style={{display:"flex",flexDirection:"row"}}>
               <Typography className={classes.typography}> Privacy <span style={{marginRight:5}}>|</span> </Typography>
               <Typography className={classes.typography}> DMAPrivacy <span style={{marginRight:5}}>|</span> </Typography>
               <Typography className={classes.typography}> Contact <span style={{marginRight:5}}>|</span> </Typography>
               <Typography className={classes.typography}> Sitemap <span>|</span> </Typography>
               </div>
               <div className={classes.textbox}><Typography className={classes.typography}>@2021 <a style={{color:"gray",textDecoration:"none"}} href="http://localhost:3001/">MOVIEWEB.COM</a> -FreeMovies - All rights reserved </Typography></div>
           </div>
           
        </div>
    )
}

export default Footer
