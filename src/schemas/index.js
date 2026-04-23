import * as Yup from "yup";

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(3, "El nombre debe contener al menos 3 caracteres")
    .max(30, "El nombre no puede contener más de 30 caracteres")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  username: Yup.string()
    .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
    .max(15, "El nombre de usuario no puede contener más de 15 caracteres")
    .required("El nombre de usuario es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(20, "La contraseña no puede contener más de 20 caracteres")
    .required("La contraseña es obligatoria")
    .matches(passwordRegEx, "La contraseña debe contener al menos una letra y un número")
});
