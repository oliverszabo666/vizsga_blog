import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";

import LongMenu from "../LongMenu/LongMenu";
import Loading from "../Loading/Loading";
import Post from "../Post/Post";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [resp, setResp] = useState(false);
  const [form, showForm] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("./data/data.json")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => setData(null))
      .finally(() => setLoading(false));
  }, []);

  const postEmail = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    fetch("./data/data.json", requestOptions)
      .then((res) => setResp(true))
      .catch((err) => setResp(false))
      .finally(() => {
        setTimeout(() => {
          showForm(false);
          console.log(form);
        }, 3000);
      });
  };

  return (
    <div className="home">
      <h1>Weboldal, ami nem totál uncsi.</h1>
      {loading ? (
        <Loading />
      ) : data ? (
        <>
          <LongMenu />

          {form && (
            <div className="form-cont">
              <h2>Iratkozz fel hírlevelünkre!</h2>
              <div className="form">
                <form>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@email.hu"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={postEmail}
                    disabled={!(email.includes("@") && email.includes("."))}
                  >
                    Feliratkozás
                  </Button>
                </form>
              </div>
            </div>
          )}

          {data.map((d) => (
            <Post key={uuidv4()} d={d} />
          ))}
        </>
      ) : (
        "Something went wrong."
      )}
    </div>
  );
};

export default Homepage;
