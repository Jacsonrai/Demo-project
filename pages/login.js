import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "./_app";
import Form from "./component/form";
const login = () => {
  const [userRedirect, setUserRedirect] = useState(false);
  const { auth, setAuth } = useContext(UserContext);

  const Redirect = () => {
    const router = useRouter();
    useEffect(() => {
      router.push("/dashboard");
    });
    return null;
  };

  const onSubmit = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: "SECRETE" }),
    });

    setUserRedirect(true);
    setAuth(true);
  };
  if (userRedirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      style={{
        marginTop: "8%",
        borderRadius: "5px",
        height: "400px",
        boxShadow: "2px 3px 8px 10px #888888",
        marginLeft: "25%",
        marginRight: "25%",
      }}
    >
      <Form />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginLeft: "10%", marginTop: "-40%" }}
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};
export default login;
