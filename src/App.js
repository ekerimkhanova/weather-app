import React, { useState } from "react";
import CardsContainer from "./components/Cards/functional/CardsContainer";
import SearchContainer from "./components/Search/functional/SearchContainer";

const App = () => {

  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  return (
    <div>
      <SearchContainer setData={setData} setCity={setCity} />
      {(data !== null && data !== undefined) && <CardsContainer data={data} city={city} />}
    </div>
  );
}

export default App;
