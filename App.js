import React, { useRef } from "react";

import "./App.css";
import { ComponentToPrint } from "./ComponentToPrint";
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
// import Header from './component/Header';
// import Main from './component/Main';
import Header from "./component/project2/Header";

import Center from "./component/project2/Center";
import Bottom from "./component/project2/Bottom";

import jokeData from "./component/project2/jokeData";
import Joke from "./component/project2/Joke";

//*////

import datas from "./component/project2/cardData";

function App() {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  //**************************************************************************************************** */
  // const jokeElement = jokeData.map((joke) => (
  //   <Joke setup={joke.setup} punchline={joke.punchline} />
  // ));

  //*////////////////////////////////////////////////////////////////////////////////////////////////////
       
  const cardDetail = datas.map((data)=>
       <Bottom 
         img={data.coverImg}
         title={data.title}
         reviewCount = {data.stats.reviewCount}
         rating= {data.stats.rating}
         price={data.price}
         location={data.location}
         openSpots={data.openSpots}
       
       />)

 return (
    <>
      {/* <ComponentToPrint ref={componentRef} /> */}
      {/* <button onClick={handlePrint}>Print this out!</button> */}
      {/* <Button onClick={handlePrint} variant="contained">Print this out!</Button> */}

      {/* //Project -1 component
      <Header/>
      <Main/> */}

      <Header />
      <Center />
      {/* <Bottom /> */}
      {/* {jokeElement} */}

      <div className="carddetail">  
      {cardDetail}

      </div>
    </>
  );
}

export default App;
