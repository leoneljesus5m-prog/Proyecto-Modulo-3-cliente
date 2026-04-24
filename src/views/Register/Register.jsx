import { Formik, Form, Field } from "formik";
import { registerSchema } from "../../schemas";
import classes from "./Register.module.css";
import axios from "axios"

const initialValues = {
  name: "",
  email: "",
  birthdate: "",
  dni: "",
  username: "",
  password: "",
};

const onSubmit = async (values, actions) => {
  try {
    const { dni, ...restOfValues } = values
    const dataToSend = {
      ...restOfValues,
      nDni: Number(dni)
    }
    const response = await axios.post("http://localhost:3000/users/register", dataToSend)
    alert("Registro exitoso!")
    actions.resetForm()
  } catch (error) {
    console.error("Error en el registro:", error);
    alert(error.response?.data?.message || "Hubo un problema con el registro");
  }
};

export default function Register() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={classes.formContainer}>
            <div className={classes.inputGroup}>
              <label htmlFor="name">Nombre</label>
              <Field
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.name && touched.name && (
                  <p className="formError">{errors.name}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="example@example.com"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.email && touched.email && (
                  <p className="formError">{errors.email}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="birthdate">Fecha de Nacimiento</label>
              <Field type="date" name="birthdate" className={classes.inputs} />
              <div className={classes.errorContainer}>
                {errors.birthdate && touched.birthdate && (
                  <p className="formError">{errors.birthdate}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="dni">Numero de DNI</label>
              <Field
                type="text"
                name="dni"
                placeholder="Ingrese su número de dni"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.dni && touched.dni && (
                  <p className="formError">{errors.dni}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="username">Nombre de usuario</label>
              <Field
                type="text"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.username && touched.username && (
                  <p className="formError">{errors.username}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                name="password"
                placeholder="************"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.password && touched.password && (
                  <p className="formError">{errors.password}</p>
                )}
              </div>
            </div>
            <button type="submit" className={classes.btnForm}>
              Registro
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
