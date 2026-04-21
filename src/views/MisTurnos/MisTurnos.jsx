import { useEffect, useState } from "react";
import Turno from "../../Components/Turno/Turno";
import { getApps } from "../../helpers";

export default function MisTurnos() {
  const [Turnos, setTurnos] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await getApps();
      setTurnos(response);
    }
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
