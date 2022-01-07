import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';


//import Snackbar from '@material-ui/core/Snackbar';
//import Alert from "@material-ui/core/Alert";


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
            paddingTop:180,
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
                height:420,
            },
            [theme.breakpoints.between('sm','md')]:{
                width:450,
                height:480,
            },
            
            
            


        },
}));



const Register = () => {
    let navigate = useNavigate();
    //const theme = useTheme();
    const classes=useStyles();
    //const matches = useMediaQuery(theme.breakpoints.down('sm'));
    
    
    const [user, setUser] = useState({
    Name:"",Mobilenumber:"",Email:"",Password:""
    });
        
        let name,value
    const handleClick=(e)=>{
        
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    const postdata= async (e)=>{
        e.preventDefault();
        const {Name,Mobilenumber,Email,Password}=user;
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Name,Mobilenumber,Email,Password
            })
        });
        const data = await res.json();
        if(data.status === 422|| !data){
            window.alert("invalid registeration");
            console.log("invalid registeration");
        }else{
            window.alert(" registeration sucessfull");
            console.log(" registeration sucessfull");
           navigate("/login");
        }
    }

    
    
      
    return (
        <>
        <Navbar/>
        <div class={classes.container}>
        <div className={classes.subcontainer}>
        <Card className={classes.card}  elevation={5}>
                    
                        <CardHeader
                            avatar={
                                <Avatar style={{backgroundColor:"#E21717"}} >
                                    M
                                </Avatar>}
                            title={
                                <Typography style={{ fontSize: 20, fontWeight: "bold"}}>Sign Up</Typography>
                            }
                            subheader={<p>to continue with <a href="https://www.google.com">google.com</a></p>} />
                        <CardContent >
                            <form  method="post" style={{display:"flex",flexDirection:"column"}} onSubmit={postdata} noValidate autoComplete="off">
                                <TextField 
                                name="Name"
                                style={{marginBottom:10}}  
                                variant="standard" 
                                id="standard-hidden-Label" 
                                color="error" 
                                label="Enter your Name"
                                size="small"
                                value={user.Name}
                                onChange={handleClick} />

                                <TextField 
                                name="Mobilenumber"
                                style={{marginBottom:10}} 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Mobile No."
                                size="small"
                                value={user.Mobilenumber}
                                onChange={handleClick}
                               
                                 />
                                
                                <TextField
                                name="Email"  
                                style={{marginBottom:10}} 
                                type="email" 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Email "
                                size="small"
                                value={user.Email}
                                onChange={handleClick}
                                 />
                                
                                <TextField  
                                name="Password"
                                style={{marginBottom:10}}  
                                type="password" 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Password " 
                                size="small"
                                value={user.Password}
                                onChange={handleClick}
                                />
                                
                                <Button 
                                
                                style={{marginTop:10,backgroundColor:"#E21717"}}
                                type="submit" 
                                 variant="contained"
                                 >Next</Button>
                            </form>
                            <CardActions>
                            
                            
                            <Button  color="error" size="small">more options</Button>
                            
                            </CardActions>
                        </CardContent>
                    
                </Card>
                <div style={{display:"flex" ,flexDirection:"row",justifyContent:"space-evenly",marginTop:20,width:400,color:"white"}}>
                <Typography fontSize={15} >Help</Typography>
                <Typography fontSize={15}>Privacy</Typography>
                <Typography fontSize={15}>Terms</Typography>
                </div>
                </div>
                </div>
                </>
        
    )
}

export default Register;