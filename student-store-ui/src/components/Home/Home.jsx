import * as React from "react"
import axios from 'axios';

import "./Home.css"

export default function Home() {

  React.useEffect(async () => {
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      const result = response.data.products;
      console.log('result: ', result);
    }
    catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="home">
      <p>Home</p>
    </div>
  )
}
