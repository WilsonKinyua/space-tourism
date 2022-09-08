import Header from "../components/Header";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="container">
        <div className="intro">
          <div className="row">
            <div className="col-md-7">
              <h4>SO, YOU WANT TO TRAVEL TO</h4>
              <h1 className="ml-1">SPACE</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well{" "}
                <br />
                genuinely go to outer space and not hover kind of on the <br />{" "}
                edge of it. Well sit back, and relax because we’ll give you a{" "}
                <br /> truly out of this world experience!
              </p>
            </div>
            <div className="col-md-5">
              <h5>EXPLORE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
