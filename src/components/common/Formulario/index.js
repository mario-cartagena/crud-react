import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button
} from '@chakra-ui/react'

const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .max(15, 'El nombre de usuario no debe tener más de 15 caracteres')
      .required('El nombre de usuario es obligatorio'),
    age: Yup.number()
      .positive('La edad debe ser un número positivo')
      .integer('La edad debe ser un número entero')
      .required('La edad es obligatoria'),
    email: Yup.string()
      .email('El correo debe ser válido')
      .required('El correo es obligatorio'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .required('La contraseña es obligatoria'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
      .min(10, 'El teléfono debe tener al menos 10 caracteres')
      .max(10, 'El teléfono no debe tener más de 10 caracteres')
      .required('El teléfono es obligatorio'),
    address: Yup.string(),
  });

  

  export const Formulario = ({username, age, email, password, phone, address, handleUser}) => {

    const initialValues = {
      username:  ''  || username,
      age:  age || '',
      email: email || '',
      password: password || '',
      phone: phone || '',
      address: address || '',
    };
    

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
          handleUser(values);
        },
        enableReinitialize: true
    })

    return (
      <div>
        <h1>Formulario de registro</h1>
        
        <form onSubmit={formik.handleSubmit}>
          <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column">
            <FormControl w="25%">
              <FormLabel>Nombre de usuario</FormLabel>
              <Input type="text" name="username" placeholder="Nombre de usuario" {...formik.getFieldProps('username')} />
              <FormErrorMessage>{formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}</FormErrorMessage>
            </FormControl>

            <FormControl w="25%">
              <FormLabel>Edad</FormLabel>
              <Input type="number" name="age" placeholder="Edad" {...formik.getFieldProps('age')} />
              <FormErrorMessage>{formik.touched.age && formik.errors.age && <div>{formik.errors.age}</div>}</FormErrorMessage>
            </FormControl>

            <FormControl w="25%">
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" name="email" placeholder="Correo electrónico" {...formik.getFieldProps('email')} />
              <FormErrorMessage>{formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}</FormErrorMessage>
            </FormControl> 

            <FormControl w="25%">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" name="password" placeholder="Contraseña" {...formik.getFieldProps('password')} />
              <FormErrorMessage>{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
            </FormControl>

            <FormControl w="25%">
              <FormLabel>Teléfono</FormLabel>
              <Input type="text" name="phone" placeholder="Teléfono" {...formik.getFieldProps('phone')} />
              <FormErrorMessage>{formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}</FormErrorMessage>
            </FormControl>

            <FormControl w="25%">
              <FormLabel>Dirección</FormLabel>
              <Input type="text" name="address" placeholder="Direacción" {...formik.getFieldProps('address')} />
              <FormErrorMessage>{formik.touched.address && formik.errors.address && <div>{formik.errors.address}</div>}</FormErrorMessage>
            </FormControl>
              

            <Button mt={7} colorScheme='teal' variant='outline' type="submit" disabled={formik.isSubmitting}>
              Registrarse
            </Button>
          </Flex>
        </form>
      </div>
    );
  }
  