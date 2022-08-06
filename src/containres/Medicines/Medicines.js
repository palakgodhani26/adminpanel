import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicinesAction } from '../../Redux/Action/Medicines.Action';

function Medicines(props) {

    const [open, setOpen] = React.useState(false);
    const [dopen, setDopen] = React.useState(false);
    const [data, setData] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDopen(false);
    };

    const handleDClickOpen = () => {
        setOpen(true);
    };



    let schema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        price: yup.number().required("Please enter price"),
        quantity: yup.string().required("Please enter quantity"),
        expiry: yup.string().required("Please enter expiry"),
    });

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }


        if (localData === null) {
            localStorage.setItem("medicines", JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem("medicines", JSON.stringify(localData));
        }

        loadData();
        handleClose();
        formikObj.resetForm();
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleInsert(values);
        },
    })

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
        { field: 'expiry', headerName: 'Expiry', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleClickOpen(params)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params)}>
                        <EditIcon />
                    </IconButton>
                </>

            )
        },
    ];

    const loadData = () => {
            dispatch(getMedicinesAction());
        }

    const dispatch = useDispatch();
    const me = useSelector( state => state.Medicines);
   
    useEffect(
        () => {
            loadData();
        },
        [])

    const { handleBlur, handleChange, handleSubmit, errors, touched } = formikObj;

    const handleDelete = (params) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter = ((l) => l.id !== params.id);

        localStorage.setItem("medicines", JSON.stringify(fdata));

        loadData();
    }


    return (
        <div>
            <h1>Medicines</h1>
            <div>
                <Button variant="outlined" onClick={handleDClickOpen}>
                    Add Medicines
                </Button>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={me.Medicines}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <Formik values={formikObj}>
                    <Form onSubmit={handleSubmit}>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle> Add Medicines</DialogTitle>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    name="name"
                                    label="Medicines Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <p>{errors.name}</p> : ''}
                                <TextField
                                    margin="dense"
                                    name="price"
                                    label="Medicines Price"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.price && touched.price ? <p>{errors.price}</p> : ''}
                                <TextField
                                    margin="dense"
                                    name="quantity"
                                    label="Medicines Quantity"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.quantity && touched.quantity ? <p>{errors.quantity}</p> : ''}
                                <TextField
                                    margin="dense"
                                    name="expiry"
                                    label="Medicines Expiry"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.expiry && touched.expiry ? <p>{errors.expiry}</p> : ''}

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Medicines;