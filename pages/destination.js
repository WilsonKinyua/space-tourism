import Link from "next/link";
import Header from "../components/Header";

export default function Destination() {
  return (
    <div className="destination">
      <Header />
      <div className="container">
        <h1 className="headings">Pick your destination</h1>
        <div className="destination-wrapper">
          <div className="row">
            <div className="col-md-6">
              <picture>
                <img
                  src="/destination/image-moon.png"
                  alt="Moon"
                  className="destination-img"
                />
              </picture>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link text-decoration-underline">Moon</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">mars</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">europa</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">titan</a>
                  </Link>
                </li>
              </ul>
              <div className="destination-content">
                <h2 className="header">MOON</h2>
                <p>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. A similique sint
                  ut nesciunt consequuntur aliquid nisi ducimus veniam
                  voluptatem assumenda.
                </p>
                <hr />
                <div className="destination-content-footer">
                  <div className="row">
                    <div className="col-md-5">
                      <h6>AVG. DISTANCE</h6>
                      <h3>384,400 km</h3>
                    </div>
                    <div className="col-md-5">
                      <h6>Est. travel time</h6>
                      <h3>3 days</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
