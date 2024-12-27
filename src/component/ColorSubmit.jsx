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
        <div>
            <Grid container spacing={2}>
                {colors.map((color) => (
                    <Grid item xs={3} key={color}>
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
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default ColorSubmit;