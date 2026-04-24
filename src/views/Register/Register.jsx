import { Formik, Form, Field } from "formik";
import { registerSchema } from "../../schemas";
import classes from './Register.module.css'

const initialValues = {
  name: "",
  email: "",
  username: "",
  password: "",
};

const onSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

export default function Register() {
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form className={classes.formContainer}>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" placeholder="Ingrese su nombre" className={classes.inputs}/>
            <div className={classes.errorContainer}>
              {errors.name && touched.name && (
                <p className="formError">{errors.name}</p>
              )}
            </div>
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
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" placeholder="************" className={classes.inputs}/>
            <div className={classes.errorContainer}>
              {errors.password && touched.password && (
                <p className="formError">{errors.password}</p>
              )}
            </div>
            <button type="submit" className={classes.btnForm}>Registro</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
