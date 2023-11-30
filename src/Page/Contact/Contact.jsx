
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  

const Contact = () => {
    return (
        <div className='bg-white'>
           <div>
           <TextField id="outlined-basic" label="Name" variant="outlined" />

            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
           </div>
           <br />
           <Button variant="contained">Contained</Button>
           
        </div>
    );
};

export default Contact;