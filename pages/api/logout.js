import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
};
