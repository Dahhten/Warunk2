import React from "react";
interface Props{
    handleClick:()=> void;
    styleNavRight: string;
    styleNavRec: string;
}

export const Navbar = ({handleClick, styleNavRight, styleNavRec}: Props) => {
  return (
    <>
      <nav className="nav-box">
        <img alt="gambar" src="logo.png" className="nav-left" />
        <h1 className="web-title">WARUNK</h1>
        <div className="nav-center">
          <div className="search">
            <input placeholder="   Search" type="text"></input>
            <a href="#">Cari</a>
          </div>
          <div className="menu-boxx">
            <a className="menu-box" href="#">
              HOME
            </a>
            <a className="menu-box" href="#">
              PERTANIAN
            </a>
            <a className="menu-box" href="#">
              PRODUK
            </a>
            <a className="menu-box" href="#">
              JASA
            </a>
            <a className="menu-box" href="#">
              PELATIHAN
            </a>
            <a className="menu-box" href="#">
              BANTUAN
            </a>
          </div>
        </div>
        <a className="nav-right" id="nav-right" style={{display: styleNavRight}} onClick={handleClick}>
          LogIn
        </a>
        <div className="login-rec" id="login-rec" style={{display: styleNavRec}}>
          <div className="trolley">
            <img src="/trolley.png" alt="trolley" />
          </div>
          <div className="profile-icon">
            <img src="/icon.png" alt="profile-icon" />
          </div>
        </div>
      </nav>
      <h3 id="login-name"></h3>
    </>
  );
};
