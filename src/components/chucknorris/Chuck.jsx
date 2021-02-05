import React, { useEffect, useState } from "react";
import { CardColumns } from "reactstrap";


const ChuckJoke = () => {
    const [joke, setJoke] = useState('');

    // const joke = setJoke = json.value = 'chuck norris joke'

  function handleFetch() {
    let url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
          setJoke(json.value)
        console.log(json);
      });
  }

//   useEffect(() => {
//       handleFetch();
//   }, [])


  return (
    <div>
      <button onClick={handleFetch}>Fetch Chuck</button>
      <p>{`${joke}`}</p>
    </div>
  );
};

export default ChuckJoke;
