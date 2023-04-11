import { createContext, useState } from "react";
import axios from "axios";
export const Context = createContext();

export function Provider({ children }) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=650df7e55eddb5507ce88025fdad199e`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <Context.Provider
      value={{
        searchLocation,
        location,
        setLocation,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
}
