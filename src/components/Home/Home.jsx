import React from "react";
import Footer from "../Footer";
import ContentBoxLeft from "./ContentBoxLeft";
import ContentBoxRight from "./ContentBoxRight";

function Home(){
  return (
    <>
      <div className="content margin-top">
        <div className="row-padding">
          <ContentBoxLeft />
          <ContentBoxRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;