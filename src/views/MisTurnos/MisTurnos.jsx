import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Turno from "../../Components/Turno/Turno";

export default function MisTurnos() {
  const [Turnos, setTurnos] = useState([]);
  const userId = useSelector((state) => state.user.userData)

  useEffect(() => {
    const getTurnos = async () => {
      try {
        const response = await axios("http://localhost:3000/appointments/");
        console.log(response.data)
        setTurnos(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    getTurnos()
  }, [])

  return (
    <div>
      {Turnos.map((turno) => {
        return (
          <Turno
            key={turno.id}
            id={turno.id}
            date={turno.date}
            time={turno.time}
            status={turno.status}
            name={turno.user.name}
            username={turno.user.credential.username}
          />
        );
      })}
    </div>
  );
}
