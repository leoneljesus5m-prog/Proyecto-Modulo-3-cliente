import * as Yup from "yup";

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(3, "El nombre debe contener al menos 3 caracteres")
    .max(30, "El nombre no puede contener más de 30 caracteres")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  birthdate: Yup.date()
    .required("La fecha es obligatoria")
    .max(new Date(), "Ingrese una fecha válida")
    .min(new Date("1920-01-01"), "Fecha no válida"),
  dni: Yup.string()
    .required("El DNI es obligatorio")
    .matches(/^[0-9]+$/, "El DNI solo debe contener números")
    .min(7, "El DNI debe tener al menos 7 dígitos")
    .max(8, "El DNI no puede tener más de 8 dígitos"),
  username: Yup.string()
    .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
    .max(15, "El nombre de usuario no puede contener más de 15 caracteres")
    .required("El nombre de usuario es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(20, "La contraseña no puede contener más de 20 caracteres")
    .required("La contraseña es obligatoria")
    .matches(
      passwordRegEx,
      "La contraseña debe contener al menos una letra y un número",
    ),
});

export const loginSchema = Yup.object({
  username: Yup.string()
    .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
    .max(15, "El nombre de usuario no puede contener más de 15 caracteres")
    .required("El nombre de usuario es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(20, "La contraseña no puede contener más de 20 caracteres")
    .required("La contraseña es obligatoria")
    .matches(
      passwordRegEx,
      "La contraseña debe contener al menos una letra y un número",
    ),
});

export const scheduleSchema = Yup.object({
  date: Yup.date()
    .required("La fecha es obligatoria")
    .min(
      tomorrow,
      "El turno debe ser programado con al menos un día de anticipación",
    ),
  time: Yup.string()
    .required("La hora es obligatoria")
    .matches(
      /^([01]\d|2[0-3]):?([0-5]\d)$/,
      "Formato de hora inválido (HH:mm)",
    ),
});
