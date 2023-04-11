import "./App.css";
import Card from "./components/Card";
import { useProvider } from "./hooks/useProvider";

function isDataEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function App() {
  const { location, setLocation, searchLocation, data } = useProvider();

  //  console.log("Data: ", data);
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      {!isDataEmpty(data) && <Card />}
    </>
  );
}

export default App;
