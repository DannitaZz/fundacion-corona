import * as yup from 'yup';

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

export default validationSchema