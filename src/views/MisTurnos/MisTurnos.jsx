import { appointmentsArray } from "../../helpers/myAppointments";
import { useState } from "react";
import Turno from "../../Components/Turno/Turno";

export default function MisTurnos() {
  const [Turnos, setTurnos] = useState(appointmentsArray);
  return (
    <div>
      {Turnos.map((turno) => {
        return (
          <Turno
            key={turno.id}
            date={turno.date}
            time={turno.time}
            status={turno.status}
          />
        );
      })}
    </div>
  );
}
