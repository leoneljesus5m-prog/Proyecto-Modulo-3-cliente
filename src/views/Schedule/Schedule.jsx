import { Formik, Form, Field } from "formik";
import { scheduleSchema } from "../../schemas";
import { useSelector } from "react-redux";
import styles from "./Schedule.module.css";
import axios from "axios";

const initialValues = {
  date: "",
  time: "",
};

export default function Schedule() {
  const userId = useSelector((state) => state.user.userData);

  const onSubmit = async (values, actions) => {
    try {
      const dataToSend = values;
      const userAppointment = {
        ...dataToSend,
        user: userId.id
      }
      console.log(userAppointment)
      await axios.post(
        "http://localhost:3000/appointments/schedule",
        userAppointment,
      );
      alert("Su turno fue agendado!!");
      actions.resetForm();
    } catch (error) {
      console.error("Error al agendar el turno:", error);
      alert(
        error.response?.data?.message || "Hubo un error al agendar el turno",
      );
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={scheduleSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.formContainer}>
            <h1 className={styles.loginLabel}>Agende su turno</h1>
            <div className={styles.inputGroup}>
              <label htmlFor="date">Fecha</label>
              <Field type="date" name="date" className={styles.inputs} />
              <div className={styles.errorContainer}>
                {errors.date && touched.date && (
                  <p className="formError">{errors.date}</p>
                )}
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="time">Hora</label>
              <Field type="time" name="time" className={styles.inputs} />
              <div className={styles.errorContainer}>
                {errors.time && touched.time && (
                  <p className="formError">{errors.time}</p>
                )}
              </div>
            </div>
            <button type="submit" className={styles.btnForm}>
              Crear turno
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
