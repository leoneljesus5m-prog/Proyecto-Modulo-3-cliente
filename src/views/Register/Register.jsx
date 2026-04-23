import { Formik, Form, Field } from "formik";
import { registerSchema } from "../../schemas";

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
          <Form>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" placeholder="Ingrese su nombre" />
            <div className="errorContainer">
              {errors.name && touched.name && (
                <p className="formError">{errors.name}</p>
              )}
            </div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="example@example.com"
            />
            <div className="errorContainer">
              {errors.email && touched.email && (
                <p className="formError">{errors.email}</p>
              )}
            </div>
            <label htmlFor="username">Nombre de usuario</label>
            <Field
              type="text"
              name="username"
              placeholder="Ingrese su nombre de usuario"
            />
            <div className="errorContainer">
              {errors.username && touched.username && (
                <p className="formError">{errors.username}</p>
              )}
            </div>
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" placeholder="************" />
            <div className="errorContainer">
              {errors.password && touched.password && (
                <p className="formError">{errors.password}</p>
              )}
            </div>
            <button type="submit">Registro</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
