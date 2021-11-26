const form=()=>{
    return(
        <>
          <form
        style={{
          
          marginTop: "8%",
        
          borderRadius: "5px",
          height: "400px",
        }}
      >
        <div className="mb-3">
          <h2 style={{ textAlign: "center" }}>Login</h2>

          <label
            className="form-label"
            style={{ marginLeft: "50px", fontWeight: "600", fontSize: "20px" }}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            style={{ marginLeft: "50px", fontWeight: "600", fontSize: "20px" }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{ marginLeft: "50px", width: "50%" }}
          />
        </div>

       
      </form>
        </>
    )
}
export default form