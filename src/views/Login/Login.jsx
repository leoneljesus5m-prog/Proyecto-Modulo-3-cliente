import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../schemas";
import classes from "./Login.module.css";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = async (values, actions) => {
    try {
        const dataToSend = values;
        await axios.post("http://localhost:3000/users/login", dataToSend)
        alert("Inicio de sesión exitoso!!")
        actions.resetForm()
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert(error.response?.data?.message || "Hubo un error al iniciar sesión")
    }
}

export default function Login() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={classes.formContainer}>
            <h1 className={classes.loginLabel}>Login</h1>
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
                placeholder="Ingrese su contraseña"
                className={classes.inputs}
              />
              <div className={classes.errorContainer}>
                {errors.password && touched.password && (
                  <p className="formError">{errors.password}</p>
                )}
              </div>
            </div>
            <button type="submit" className={classes.btnForm}>
              Iniciar Sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
