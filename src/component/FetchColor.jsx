import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TablePagination, Pagination,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getcolors, deletecolor } from '../api/api.js';

const FetchColor = () => {
    const navigate = useNavigate();
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(0); 
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [totalCount, setTotalCount] = useState(0); 
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchColors = async () => {
            const response = await getcolors(page + 1, rowsPerPage); 
            setColors(response.rows);
            setTotalCount(response.count); 
        };
        fetchColors();
    }, [page, rowsPerPage]);

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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    return (
        <div style={{marginTop:'60px'}}>
            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center' , flexDirection: 'column'}}>
            <Typography variant="h4" gutterBottom>
                Colors
            </Typography>
            <Grid container spacing={2} style={{display: 'flex', alignItems: 'center' , justifyContent: 'center' ,
                flexDirection: 'column'
            }}
            >
                {colors.map(color => (
                    <Grid item xs={12} sm={6} md={4} key={color.id} style={{width: '1000px'}}>
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
                count={Math.ceil(totalCount / rowsPerPage)}
                page={page + 1} 
                onChange={(event, value) => setPage(value - 1)} 
                color="primary"
                style={{ marginTop: '20px' }}
            />
            <Grid style={{display: 'flex', alignItems: 'center',
                justifyContent: 'center' , flexDirection: 'row',marginTop:'20px'
            }}>
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
            </Grid>
            </Box>
        </div>
    );
};

export default FetchColor;
































// import React, { useEffect, useState } from 'react';
// import { Button, Grid, Pagination, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TablePagination } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { getcolors, deletecolor } from '../api/api.js';

// const FetchColor = () => {
//     const navigate = useNavigate();
//     const [colors, setColors] = useState([]);
//     const [page, setPage] = useState(1);
//     const [rowsPerPage, setRowsPerPage] =  useState(2);

//     const [totalPages, setTotalPages] = useState(1);
//     const [open, setOpen] = useState(false);

//     useEffect(() => {
//         const fetchColors = async () => {
//             const response = await getcolors(page, rowsPerPage);
//             setColors(response.rows);
//             //setTotalPages(Math.ceil(response.count / 10)); // Assuming 10 colors per page
//             setTotalPages(response.count);
//         };
//         fetchColors();
//     }, [page, rowsPerPage]);

//     const handleDelete = async (id) => {
//         await deletecolor(id);
//         setColors(colors.filter(color => color.id !== id));
//     };

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 2));
//         setPage(0); // Reset to first page
//     };

//     return (
//         <div>
//             <Typography variant="h4" gutterBottom>
//                 Colors
//             </Typography>
//             <Grid container spacing={2}>
//                 {colors.map(color => (
//                     <Grid item xs={12} sm={6} md={4} key={color.id}>
//                         <div style={{ backgroundColor: color.color, padding: '20px', borderRadius: '8px', color: '#fff' }}>
//                             <Typography variant="h6">{color.color}</Typography>
//                             <Button variant="contained" color="secondary" onClick={() => handleDelete(color.id)}>
//                                 Delete
//                             </Button>
//                         </div>
//                     </Grid>
//                 ))}
//             </Grid>
//             <TablePagination
//             rowsPerPageOptions={[2, 4, 6]}
//             component="div"
//             count={totalPages}
//             rowsPerPage={rowsPerPage}
//             page = {page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             style={{ marginTop: '20px'}}
//             />
//             <Button variant="contained" color="primary" onClick={() => navigate('/')}>
//                 Go to Main Page
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleClickOpen}
//              style={{ marginLeft: '10px' }}>
//                 Done
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="draggable-dialog-title"
//             >
//                 <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//                     Welcome
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Welcome to Cortica
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button autoFocus onClick={handleClose}>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default FetchColor;
