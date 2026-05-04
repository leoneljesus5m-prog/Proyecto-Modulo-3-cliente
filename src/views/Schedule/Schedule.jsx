import { Formik, Form, Field } from "formik";
import { scheduleSchema } from "../../schemas";
// import { useSelector } from "react-redux";
import styles from "./Schedule.module.css";
import axios from "axios";

const initialValues = {
  date: "",
  time: "",
};

export default function Schedule() {
  // const userIdRedux = useSelector((state) => state.user.userData);
  // console.log(userId);

  const onSubmit = async (values, actions) => {
    try {
      const userId = window.localStorage.getItem("userId");
      const parsedUserId = JSON.parse(userId);
      console.log("Parsed User ID:", parsedUserId);
      const convertedUserId = parseInt(parsedUserId.id, 10);
      console.log("Converted User ID:", convertedUserId);
      const dataToSend = values;
      const userAppointment = {
        ...dataToSend,
        userId: convertedUserId,
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
