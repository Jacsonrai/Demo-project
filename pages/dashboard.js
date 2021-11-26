import { parseCookies } from "nookies";
const dashboard = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
      Welcome to Dashboard
    </h1>
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
    props: {},
  };
}
export default dashboard;
