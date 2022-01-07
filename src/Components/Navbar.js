import React,{useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, Typography, Box ,Divider,List,ListItem,IconButton} from '@material-ui/core';
//import ReactPlayer from "react-player";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "../style.css";
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({

    toolbrtext:{
        color: "white", 
        fontWeight: 800,
        fontSize:30,
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:18,
        }
    },
    box:{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-around", 
        width: "350px", 
        marginLeft: 30, 
        

    },
    button:{
        color: "white", 
        fontWeight: 700,
        textDecoration:"none",
    },
    
    appbar: {
        backgroundColor: "#1a1a1a",
    },
    appbarColor: {
        backgroundColor: "transparent",
    },
}))

const Navbar = () => {
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const [colorchange, setcolorChange] = useState(false);


    const changeAppbarColor = () => {
        if (window.scrollY >= 80) {
            setcolorChange(true);
        }
        else {
            setcolorChange(false);
        }
    };
    window.addEventListener('scroll', changeAppbarColor);
    return (
       <>
       <AppBar className={colorchange ? classes.appbar : classes.appbarColor} >
                <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Typography  className={classes.toolbrtext} > MovieWeb </Typography>

                    <Hidden mdDown>
                    <Box className={classes.box}>

                        <Button className={classes.button} variant="text">Home</Button>
                        <Button className={classes.button} variant="text"><a style={{textDecoration:"none",color:"white"}} href="http://localhost:3000/login">Login</a></Button>
                        <Button className={classes.button} variant="text">Explore</Button>
                    </Box>
                    </Hidden>
                    <Hidden mdUp>
                    <IconButton style={{color:"white"}}>
              <MenuIcon  onClick={()=>setOpen(true)}/>
            </IconButton>
                    </Hidden>
                   
                </Toolbar>
                  
        <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={()=>setOpen(true)}
            onClose={()=>setOpen(false)}
            >
              
               <div>
             <IconButton>
               <ChevronRightIcon position="left" onClick={()=>setOpen(false)}/>
               </IconButton>
               </div>

               <Divider/>
               <List>
                 <ListItem>Home</ListItem>
                 <ListItem><a style={{textDecoration:"none",color:"black"}}href="http://localhost:3001/login">Login</a></ListItem>
                 <ListItem>Explore</ListItem>
               </List>
               
            
             </SwipeableDrawer>
             
            </AppBar>
       </>
    )
}

export default Navbar
