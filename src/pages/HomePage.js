import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../utlis/request";
const HomePage = () => {
  return (
    <div>
      <Main />
      <Row RowId={1} title="Up Coming" fetchURL={request.requestUpcoming} />
      <Row RowId={2} title="Popular" fetchURL={request.requestPopular} />
      <Row RowId={3} title="Trending" fetchURL={request.requestTrending} />
      <Row RowId={4} title="Top Rated" fetchURL={request.requestTopRated} />
      <Row RowId={5} title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
};

export default HomePage;
