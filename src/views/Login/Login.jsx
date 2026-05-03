import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../schemas";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slices";
import classes from "./Login.module.css";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
  try {
    const dataToSend = values;
    const response = await axios.post("http://localhost:3000/users/login", dataToSend);
    const userId = response.data;
    const userToSave = {
      id: userId,
      name: values.username
    }
    dispatch(setUserData(userToSave));
    alert("Inicio de sesión exitoso!!");
    window.localStorage.setItem("userId", JSON.stringify(userToSave));
    actions.resetForm();
    window.location.href = "/appointment";
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert(error.response?.data?.message || "Hubo un error al iniciar sesión");
  }
};

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
