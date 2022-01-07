import React from 'react';
import movieimg from "./movie.svg";
import {Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles((theme)=>({
    container:{
        height:"500px", 
        backgroundColor:"black",
        marginTop:5,
        [theme.breakpoints.between('xs','sm')]:{
            height:"600px"
        }
    },
    subcontainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingTop:40,
        [theme.breakpoints.between('xs','sm')]:{
            flexDirection:"column-reverse"
        }
    },
    textcontainer:{
        [theme.breakpoints.between('xs','sm')]:{
            
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center"
        }
    },
    typographytitle:{
        color:"white",
        fontWeight:700,
        fontSize:40,
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:22,
        }
    },
    typographysubtitle:{
        color:"white",
        width:600,
        fontSize:20,
        [theme.breakpoints.between('xs','sm')]:{
            width:300,
            fontSize:14,
        }
    },
    button:{
        marginTop:20,
    },
    img:{
        width:"400px",
        height:"400px",
        [theme.breakpoints.between('xs','sm')]:{
            width:"200px",
            height:"200px"
        }
    }

}));

const Rest = () => {
    const classes=useStyle();
    return (
        <div className={classes.container} >
            <div className={classes.subcontainer}>
                <div className={classes.textcontainer}>
                <Typography  className={classes.typographytitle} >Watch The Latest Movies Now.</Typography>
                <Typography  className={classes.typographysubtitle} >Lorem Ipsum is simply dummy text 
                of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                 but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
                <Button color="primary" variant="contained" className={classes.button}>Subscribe</Button>
                </div>
            <img className={classes.img} src={movieimg}/>
            </div>
        </div>
    )
}

export default Rest
