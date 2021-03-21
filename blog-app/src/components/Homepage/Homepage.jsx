import { useState, useEffect } from "react";
import ButtonM from "../ButtonM/ButtonM";
import LongMenu from "../LongMenu/LongMenu";
import Loading from "../Loading/Loading";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("data/data.json");
    const json = response.json();
    console.log("got data: ", json);
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div className="home">
      {loading && <Loading />}
      <h1>Website that doesn't stink.</h1>
      <LongMenu />
      <ButtonM />
    </div>
  );
};

export default Homepage;
