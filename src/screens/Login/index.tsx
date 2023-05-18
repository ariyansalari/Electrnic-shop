import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import "./style.css"
import { Uselogin } from "./Uselogin";



export const Login = () => {
const {
    register,
errors,
handleSubmit,
handlelogin,
}=Uselogin();
    return ( 
        <Box className="flex bg-white" component={"div"} sx={{width:"960px"}}>
        <Box component={"div"}>
<img src="../../public/photo/Login/LoginImage.png" alt="login photo" />
        </Box>
        <Box component={"div"}>
            <h2 className="text-3xl  font-bold text-center mt-16">Login</h2>
<form onSubmit={handleSubmit(handlelogin)} className="ml-16">
<TextField
{...register("email")}
error={Boolean(errors.email?.message)}
helperText={errors.email?.message}
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><PersonIcon/></InputAdornment>,
          }}
        />
         <TextField
         error={Boolean(errors.password?.message)}
         helperText={errors.password?.message}
         {...register("password")}
          label="Password"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><HttpsIcon/></InputAdornment>,
          }}
        />

        <div>
            <a href="" className="flex justify-end">lupa password?</a>
        </div>

        <Button variant="contained" type="submit" className="button">Masuk</Button>

        <div>
            <p>belum punya akun ? <a>daftar sekarang</a></p>
        </div>
</form>
        </Box>
        </Box>
     );
}
 
