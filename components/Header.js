import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  return (
    <div className="pt-4">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand text-white">
              <picture>
                <img
                  src="https://www.cyclic.sh/images/cyclic-logo.png"
                  alt=""
                  height="70px"
                />
              </picture>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex bg-blur">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/destination">
                  <a className="nav-link">Destination</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/crew">
                  <a className="nav-link">crew</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/technology">
                  <a className="nav-link">technology</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
