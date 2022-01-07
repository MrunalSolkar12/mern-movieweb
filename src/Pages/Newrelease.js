import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
//import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import moviearray from './Array';
import Navbar from '../Components/Navbar';

const useStyle=makeStyles((theme)=>({
  container:{
    display:"flex",
    flexWrap:"wrap",
    backgroundColor:"#0d0d0d"
    
  },
  card:{
    width:230,
    marginRight:10,
    marginTop:10,
    height:350,
    [theme.breakpoints.between('xs','sm')]:{
      width:170,
      height:250,
      marginRight:10,
    }
    },
    cardmedia:{
      height:300,
      [theme.breakpoints.between('xs','sm')]:{
        height:200
      }
    },
    cardcontent:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#1a1a1a"
    },
    typography:{
      fontWeight:900,
      fontSize:18,
      color:"white",
      [theme.breakpoints.between('xs','sm')]:{
        display:"flex",
        fontSize:16,
        fontWeight:700,
       
      }
    }
}))

const Newrelease = () => {
 
  const classes=useStyle();
    
   
  /*useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      //.then((res) =>setImage([res.data]))
      .then((res)=>console.log(res))
      .catch((err) => console.log(err));
  })*/
 
//console.log(moviearray);
  
    return (
      <>
        <Navbar/>
          <div className={classes.container}>
            {moviearray.map((item)=>(
                <Card className={classes.card}>
            <CardMedia
        component="img"
       className={classes.cardmedia}
        image={item.image}
        alt="Paella dish"
      />
      <CardContent className={classes.cardcontent}>
         <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
        <Typography  className={classes.typography}>{item.title}</Typography>
         </div>
          </CardContent>
            </Card>
            ))
}
</div>

       </>
    )
}

export default Newrelease
