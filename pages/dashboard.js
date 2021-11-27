import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import {UserContext} from  './_app'

const dashboard = ({token}) => {
  const { auth, setAuth } = useContext(UserContext);

  console.log('client',token)
  
  useEffect(()=>{
    if(token){
      setAuth(true)
    }
  },[token])
  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
      Welcome to Dashboard
    </h1>
  );
};

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  console.log('token',token)
  if (!token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {token},
  };
}
export default dashboard;
