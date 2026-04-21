import axios from "axios";

export async function getApps() {
    try {
        const response = await axios("http://localhost:3000/appointments");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}