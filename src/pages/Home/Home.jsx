import React from "react";
import "./Home.css";
import Header from "../../containers/Header/Header";
import Preview from "../../components/Preview/Preview";
import service from "../../services/service";

const Home = () => {


  const test = async () => {
    let testRequest = await service
      .testCall()
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        return e;
      });
    alert(testRequest);
  };

  return (
    <div>
      <Header />
      <Preview />
      <button onClick={test}>CLICK FOR TEST</button>
    </div>
  );
};

export default Home;
