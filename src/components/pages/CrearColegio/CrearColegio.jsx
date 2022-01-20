import React from 'react'
import Card from '@mui/material/Card';
import './CrearColegio.css'
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createSchool } from '../../../Firebase/functions';
import validationSchema from '../../forms/validationSquema';

const CrearColegio = () => {
    const formik = useFormik({
      
        initialValues: {
            Nombre: '',
            Ciudad: '',
            Depto: '',
            email: '',
            tel: '',
            date: '2017-05-24',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            const pId = 'lzbAlSzucQa3ELUbYMbCBddz6uk2';
            const name = values.Nombre;
            const city = values.Ciudad;
            const depto = values.Depto;
            const email = values.email;
            const tel = values.tel;
            const date = values.date;
            createSchool(name, city, depto, email, tel, date, pId);
            console.log(values)
        },
        enableReinitialize: true
    });

    return (
        <>
            <h3 className='title-form'>Ingresar información institucional</h3>
            <div className='formContainerCreate'>
                <Card className="paperFormCreate" elevation={4} >
                    <form onSubmit={formik.handleSubmit}>
                        <div className='firstFieldCreate'>
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
                        <div>
                            <TextField
                                id="date"
                                name="date"
                                label="Fecha inicio implementación"
                                type="date"
                                variant="standard"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={formik.touched.date && Boolean(formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
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

export default CrearColegio;