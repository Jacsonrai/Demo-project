import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import {UserContext} from  './_app'

const Home = ({token}) => {
  const { auth, setAuth } = useContext(UserContext);

  console.log('client',token)
  
  useEffect(()=>{
    if(!token){
      return ""
    }
    else{
      setAuth(true)
    }
  },[])
  
  return (
    
    <>
    
      <div>
      
          <h1 style={{textAlign: 'center',marginTop: '100px'}}>WELCOME TO DEMO PROJECT</h1>

      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
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

export default Home;
