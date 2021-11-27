import { useContext, useState, useEffect } from "react";
import { UserContext } from "../_app";
import { useRouter } from "next/router";
import Link from "next/link";

const nav = ({token}) => {
  const router = useRouter();
  const [userRedirect, setUserRedirect] = useState(false);
  const { auth, setAuth } = useContext(UserContext);
 


  const onSubmit = () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    setUserRedirect(true);
    setAuth(false);
    router.push("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Demo Project</a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {auth ? (
                <>
                  <li className="nav-item">
                    <Link href="/dashboard">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        style={{
                          marginTop: "5px",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{}}
                        onClick={onSubmit}
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
                  >
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ float: "right" }}
                    >
                      Login
                    </button>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


export default nav;
