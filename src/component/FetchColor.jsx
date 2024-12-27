import React, { useEffect, useState } from 'react';
import { Button, Grid, Pagination, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getcolors, deletecolor } from '../api/api.js';

const FetchColor = () => {
    const navigate = useNavigate();
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchColors = async () => {
            const response = await getcolors();
            setColors(response.rows);
            setTotalPages(Math.ceil(response.count / 10)); // Assuming 10 colors per page
        };
        fetchColors();
    }, [page]);

    const handleDelete = async (id) => {
        await deletecolor(id);
        setColors(colors.filter(color => color.id !== id));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Colors
            </Typography>
            <Grid container spacing={2}>
                {colors.map(color => (
                    <Grid item xs={12} sm={6} md={4} key={color.id}>
                        <div style={{ backgroundColor: color.color, padding: '20px', borderRadius: '8px', color: '#fff' }}>
                            <Typography variant="h6">{color.color}</Typography>
                            <Button variant="contained" color="secondary" onClick={() => handleDelete(color.id)}>
                                Delete
                            </Button>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
                style={{ marginTop: '20px' }}
            />
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go to Main Page
            </Button>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginLeft: '10px' }}>
                Done
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Welcome
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Welcome to Cortica
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};



export default FetchColor;












// import React, { useEffect, useState } from 'react';
// import { Button, Grid, Pagination, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { getcolors, deletecolor } from '../api/api.js';

// const FetchColor = () => {

//     const navigate = useNavigate();
//     const [colors, setColors] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);

// console.log(`${colors}===================`);

//     useEffect(() => {
//         const fetchColors = async () => {
//             const response = await getcolors();
//             console.log(`${response.rows} thi si response of dsjf sjf`);
//             setColors(response.rows);
//             setTotalPages(Math.ceil(response.total / 10)); // Assuming 10 colors per page
//         };
//         fetchColors();
//     }, [page]);

//     const handleDelete = async (id) => {
//         await deletecolor(id);
//         setColors(colors.filter(color => color.id !== id));
//     };

//     return (
//         <div>
//             <Typography variant="h4" gutterBottom>
//                 Colors
//             </Typography>
//             <Grid container spacing={2}>
//                 {colors.map(color => (
//                     <Grid item xs={12} sm={6} md={4} key={color.id}>
//                         <div style={{ backgroundColor: color.hex, padding: '20px', borderRadius: '8px' }}>
//                             <Typography variant="h6">{color.color}</Typography>
//                             <Button variant="contained" color="secondary" onClick={() => handleDelete(color.id)}>
//                                 Delete
//                             </Button>
//                         </div>
//                     </Grid>
//                 ))}
//             </Grid>
//             <Pagination
//                 count={totalPages}
//                 page={page}
//                 onChange={(event, value) => setPage(value)}
//                 color="primary"
//                 style={{ marginTop: '20px' }}
//             />
//             <Button variant="contained" color="primary" onClick={() => navigate('/')}>
//                 Go to Main Page
//             </Button>
//         </div>
//     );
// };

// export default FetchColor;