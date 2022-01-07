import React, { useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';

const useStyles=makeStyles((theme)=>({
    container:{
        backgroundImage:"linear-gradient(to bottom, rgba(49, 47, 47, 0.527), rgba(14, 1, 10, 0.596)),url(https://i.redd.it/eonejn8njz121.jpg)",
        backgroundSize:"100% ",
        height:"100vh",
        overflow:"hidden",
    },
        subcontainer:{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            paddingTop:160,
            [theme.breakpoints.between('xs','sm')]:{
                paddingTop:100,
            },
            [theme.breakpoints.between('sm','md')]:{
                paddingTop:250,
            }
            
           
           
        },
        card:{
            width:370,
            [theme.breakpoints.between('xs','sm')]:{
                width:310,
                height:400,
            },
            [theme.breakpoints.between('sm','md')]:{
                width:450,
                height:400,
            },
        },
    }));


const Login = () => {
    let navigate=useNavigate();
    const classes=useStyles();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const loginuser= async (e)=>{
        e.preventDefault();
        const res= await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               Email,Password
            })
        });
        const data = await res.json();
        console.log(data);
        if(res.status === 400|| !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert(" login sucessfull");
            console.log(" login sucessfull");
            navigate("/");
           
            //sendEmail();
        }
    }
    
   /* var templateParams = {
        name:"Mrunal",
        email:Email,
        messagetitle:"This is Mrunal",
        messagepara:"Welcome to Mrunal Website.This is a Register-Login application where  if the user is  newto the website the user have to first register then have to login to enter to the HomeScreen. after userlogin successfully the user will receive a welcome email to the user email."
    };
    const sendEmail=(e)=>{
       
        emailjs.send(
            "service_cxavqbc",
            "template_gmpmz1w",
            templateParams,
            "user_vL8LxTPMb2xuRgtx29yib"
        ).then((res)=>{console.log(res.text);})
        .catch((err)=>{console.log(err.text);})
    }*/
    
   
    return (
        <>
        <Navbar/>
        <div className={classes.container} >
        <div className={classes.subcontainer}>
        
        <Card className={classes.card} elevation={5}>

            <CardHeader style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                avatar={
                    <Avatar style={{backgroundColor:"#E21717"}} >
                        M
                    </Avatar>}
                title={
                    <Typography style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Typography>
                }
                subheader={<p>to continue with <a href="https://accounts.google.com/Login">google.com</a></p>} />
            <CardContent >
                <form  method="post"  style={{display:"flex",flexDirection:"column"}} onSubmit={loginuser}  noValidate autoComplete="off">




                    <TextField
                        
                        style={{ marginBottom: 10 }}
                        type="email"
                        variant="standard"
                        id="standard-basic"
                        color="error"
                        label="Enter Your Email "
                        size="small" 
                        name="email"
                        value={ Email}
                        onChange={(e)=>{setEmail(e.target.value)}} />

                    <TextField
                       
                        style={{ marginBottom: 10 }}
                        type="password"
                        variant="standard"
                        id="standard-basic"
                        color="error"
                        label="Enter Your Password "
                        size="small" 
                        name="password"
                        value={Password}
                        onChange={(e)=>{setPassword(e.target.value)}}/>

                    <Button
                        style={{ marginTop: 10, backgroundColor: "#E21717" }}
                        type="submit"
                        variant="contained"
                       >Next</Button>
                    </form>


                <CardActions style={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography marginBottom={5} variant="body3" color="error">
                        <a style={{textDecoration:"none",color:"red"}}
                        
                        href="#">
                        Forget email?</a>
                    </Typography>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <p>Not SignUp?</p><Button  color="error" size="small"><a href="http://localhost:3000/register" style={{textTransform:"capitalize",color:"black"}}>SignUp</a></Button>
                    </div>
                </CardActions>
            </CardContent>

        </Card>
         
        <div style={{display:"flex" ,flexDirection:"row",justifyContent:"space-evenly",width:500,marginTop:20,color:"white"}}>
        <Typography fontSize={15} >Help</Typography>
        <Typography fontSize={15}>Privacy</Typography>
        <Typography fontSize={15}>Terms</Typography>
        </div>
      </div>
        </div>
      
        
</>
    )
}

export default Login;