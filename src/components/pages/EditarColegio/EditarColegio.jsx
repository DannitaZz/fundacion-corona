import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import '../../forms/Colegio.css'
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getSchool, updateSchool } from '../../../Firebase/functions';
import validationSchema from '../../forms/validationSquema';
import { useParams } from 'react-router-dom';

const EditarColegio = () => {
  const {sId} = useParams();
  console.log('EL ID del colegio', sId);
  const initialSchool = {
    name: '',
    city: '',
    depto: '',
    email: '',
    tel: '',
  }

  const [school, setSchool] = useState(initialSchool);

  useEffect(() => {
    const callSchool = async () => {
      
      const currentSchool = await getSchool(sId);
      console.log(currentSchool.data().name);
      setSchool(currentSchool.data());
    }
    callSchool();
  }, [])


    const formik = useFormik({
      
        initialValues: {
            Nombre: school.name,
            Ciudad: school.city,
            Depto: school.depto,
            email: school.email,
            tel: school.tel,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            const pId = 'lzbAlSzucQa3ELUbYMbCBddz6uk2';
            const sId = 'eeh1pXJZRaz4ILGRA4V9';
            const objValues = {name: values.Nombre, city: values.Ciudad, depto: values.Depto, email: values.email, tel: values.tel, }
            updateSchool(pId, sId, objValues);
            console.log(values)
        },
        enableReinitialize: true
    });


    return (
        <>
            <h3 className='tittleForm'>Actualizar información institucional</h3>
            <div className='formContainer'>
                <Card className="paperForm" elevation={4} >
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

export default EditarColegio;


