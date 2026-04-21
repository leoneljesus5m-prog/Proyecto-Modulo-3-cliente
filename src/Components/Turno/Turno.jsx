import classes from './Turno.module.css'

export default function Turno({ id, date, time, status, name, username }) {
  return (
    <div className={`${classes.container}`}>
      <h1 className={`${classes.title}`}>Turno #{id}</h1>
      <p className={`${classes.content}`}>Usuario: {name} ({username})</p>
      <p className={`${classes.content}`}>Fecha: {date}</p>
      <p className={`${classes.content}`}>Hora: {time}</p>
      <p className={`${classes.content}`}>Estado: {status}</p>
    </div>
  )
}
