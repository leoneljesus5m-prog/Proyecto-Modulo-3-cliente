import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Turno from "../../Components/Turno/Turno";

export default function MisTurnos() {
  const [turnos, setTurnos] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const id = userId ? userId.id.id : null;

  useEffect(() => {
    const getTurnos = async () => {
      try {
        const response = await axios(
          `http://localhost:3000/appointments/${id}`,
        );
        const data = response.data;
        setUserInfo(data);
        setTurnos(data.appointments || []);
      } catch (error) {
        console.log(error);
      }
    };
    getTurnos();
  }, [id]);

  return (
    <div>
      {turnos.map((turno, id) => {
        return (
          <Turno
            key={turno.id}
            id={id + 1}
            date={turno.date}
            time={turno.time}
            status={turno.status}
            name={userInfo?.name}
            username={userId?.name}
          />
        );
      })}
    </div>
  );
}
