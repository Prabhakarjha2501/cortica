import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { addcolor } from '../api/api.js';

const ColorSubmit = () => {
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState([]);

    const colors = ['red', 'green', 'blue', 'black'];

    const handleColorSelect = (color) => {
        setSelectedColor((prevColors) => {
            if (prevColors.includes(color)) {
                return prevColors.filter((c) => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
    };

    const handleSubmit = async () => {
        if (selectedColor.length > 0) {
            await addcolor(selectedColor);
        navigate('/fetchcolor');
        }
    };

    return (
        <div  style={{marginTop:"100px",marginRight:"100px"}}>
            <Grid container spacing={2} style={{ display:'grid',justifyItems:'center',alignItems:'center',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'auto auto',rowGap:'20px',columnGap:'5px'}}>
                {colors.map((color) => (
                    <Grid item xs={3} key={color} style={{width:'1000px'}}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: color, width: '100%', height: '100px' }}
                            onClick={() => handleColorSelect(color)}
                        >
                            {color}
                        </Button>
                    </Grid>
                ))}
             </Grid>
             <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
            <Button  variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
            </Grid>
        </div>
    );
};

export default ColorSubmit;