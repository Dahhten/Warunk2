import React from "react";

export const Footer = () => {
  return (
    <>
      <nav className="footer">
        <div className="footer2">
          <div className="frame-4">
            <img className="logo" src="/logo0.png" alt="Logo" />
            <div className="rights">2024 ALL RIGHTS RESERVED</div>
          </div>
          <div className="desc">
            <span>
              <span className="desc-highlight">Gank </span>
              is a content membership platform that helps content creators
              accept donations, sell goods and services, and manage memberships
              at 0% platform fees.
            </span>
          </div>
          <div className="place">
            Gank Pte. Ltd.
            <br />
            1 Pemimpin Drive, #08-01
            <br />
            Singapore 576151
            <br />
            Email: support@ganknow.com
          </div>
          <div className="links">
            <span>
              <a href="#" className="link">
                Ketentuan Penggunaan
              </a>
              <br />
              <a href="#" className="link">
                Kebijakan Privasi
              </a>
              <br />
              <a href="#" className="link">
                Kebijakan Pengembalian Dana
              </a>
              <br />
              <a href="#" className="link">
                FAQ
              </a>
              <br />
              <a href="#" className="link">
                Blog
              </a>
              <br />
              <a href="#" className="link">
                Creator University
              </a>
            </span>
          </div>
          <div className="apps">
            <img
              className="google-play"
              src="/google-play-10.png"
              alt="Google Play"
            />
            <img
              className="app-store"
              src="/app-store-10.png"
              alt="App Store"
            />
          </div>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon">
            <div className="circle">
              <img src="/instagram0.svg" alt="Instagram" />
            </div>
          </a>
          <a href="#" className="social-icon">
            <div className="circle">
              <img src="/facebook0.svg" alt="Facebook" />
            </div>
          </a>
          <a href="#" className="social-icon">
            <div className="circle">
              <img src="/youtube0.svg" alt="YouTube" />
            </div>
          </a>
          <a href="#" className="social-icon">
            <div className="circle">
              <img src="/twitter0.svg" alt="Twitter" />
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};
