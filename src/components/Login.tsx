import React from "react";
interface Props {
  vis: string;
  handleSubmit: () => void;
}

export const Login = ({ vis, handleSubmit }: Props) => {
  return (
    <>
      <nav className="Login" id="login" style={{ display: vis }}>
        <img src="/bg.webp" alt="bg" />
        <div className="log-bg"></div>
        <form
          className="login-bar"
          action="index.html"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1>SELAMAT DATANG</h1>
          <label>Username</label>
          <input type="text" id="namaValue" />
          <br />
          <label>Password</label>
          <input type="password" id="titleValue" />
          <br />
          <input
            type="submit"
            onClick={() => {
              localStorage.setItem(
                "nama",
                (document.getElementById("namaValue") as HTMLInputElement).value
              );
              localStorage.setItem(
                "title",
                (document.getElementById("titleValue") as HTMLInputElement)
                  .value
              );

              handleSubmit();
            }}
          />
        </form>
      </nav>
    </>
  );
};
