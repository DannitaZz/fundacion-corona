import React from "react";
import Header from '../Header/Header';
import Card from '@mui/material/Card';
import './Colegio.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const validationSchema = yup.object({
    Nombre: yup
        .string('Escriba el nombre del colegio')
        .required('El nombre es requerido'),
    Ciudad: yup
        .string('Ingrese la ciudad')
        .required('La ciudad es requerida'),
    Depto: yup
        .string('Ingrese el departamento')
        .required('El departamento es requerido'),
    email: yup
        .string('Ingrese email')
        .email('El email debe ser válido')
        .required('El email es requerido'),
    tel: yup
        .string('Ingrese un número telefónico')
        .required('El teléfono es requerido'),
});

const SchoolForm = () => {
    const formik = useFormik({
        initialValues: {
            Nombre: '',
            Ciudad: '',
            Depto: '',
            email: '',
            tel: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            
            <div className='formContainer'>
                <Card className="paperForm" elevation={3} >
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <TextField
                                id="Nombre"
                                name="Nombre"
                                label="Nombre"
                                variant="standard"
                                value={formik.values.Nombre}
                                onChange={formik.handleChange}
                                error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
                                helperText={formik.touched.Nombre && formik.errors.Nombre}
                            />
                        </div>
                        <br></br>
                        <div>
                            <TextField
                                id="Ciudad"
                                name="Ciudad"
                                label="Ciudad"
                                variant="standard"
                                value={formik.values.Ciudad}
                                onChange={formik.handleChange}
                                error={formik.touched.Ciudad && Boolean(formik.errors.Ciudad)}
                                helperText={formik.touched.Ciudad && formik.errors.Ciudad}
                            />
                        </div>
                        <br></br>
                        <div>
                            <TextField
                                id="Depto"
                                name="Depto"
                                label="Departamento"
                                variant="standard"
                                value={formik.values.Depto}
                                onChange={formik.handleChange}
                                error={formik.touched.Depto && Boolean(formik.errors.Depto)}
                                helperText={formik.touched.Depto && formik.errors.Depto}
                            />
                        </div>
                        <br></br>
                        <div>
                            <TextField
                                id="email"
                                name="email"
                                label="Correo electrónico"
                                variant="standard"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>
                        <br></br>
                        <div>
                            <TextField
                                id="tel"
                                name="tel"
                                label="Teléfono"
                                variant="standard"
                                value={formik.values.tel}
                                onChange={formik.handleChange}
                                error={formik.touched.tel && Boolean(formik.errors.tel)}
                                helperText={formik.touched.tel && formik.errors.tel}
                            />
                        </div>
                        <br></br>

                        <Button color="primary" className="btn-send" variant="contained" type="submit">
                            Enviar
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default SchoolForm