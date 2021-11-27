import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development",

      maxAge: 60 * 60,
      sameSite: "lax",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: "cookie is created" });
};
