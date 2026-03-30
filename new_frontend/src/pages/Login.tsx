import React from 'react';
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import CustomisedInput from '../components/shared/CustomisedInput';

const Login = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const email=formData.get("email");
    const password=formData.get("password");
    console.log(email,password);
  };
  return (
    <Box width={"100%"} height={"100vh"} display="flex" flex={1}>
      <Box
        padding={8}
        mt={8}
        sx={{ display:"flex"}}
      >
        <img src="/airobot.png" alt="Robot" style={{width:"400px"}} />
      </Box>
      <Box display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}
      ml={'aut'}
      mt={16}
      >
        <form
            onSubmit={{handleSubmit}} 
            style={{margin:'auto',
            padding:'30px',
            boxShadow:"10px 10px 20px rgba(0,0,0,0.2)",
            borderRadius:'10px',
            border:"none"
            }}>
                <Box sx={{display:"flex",
                    flexDirection:'column',
                    justifyContent:'center',
                    }}>
                    <Typography variant="h4"
                     textAlign='center'
                     padding={2}
                     fontWeight={600}
                     >Login
                    </Typography> 
                    <CustomisedInput type="email" name="email" label="Email" />
                    <CustomisedInput type="password" name="password" label="Password" />
                    <Button type="submit" sx={{px:2,
                      py:1,
                      mt:2,
                      width:"400px",
                      borderRadius:2,
                      bgcolor:"#00fffc",
                      ":hover":{
                        bgcolor:"white",
                        color:"black",
                      }
                      }}
                      endIcon={<IoIosLogIn />}
                      >Login</Button>
                </Box>
            </form>
      </Box>
    </Box>
  );
};

export default Login;