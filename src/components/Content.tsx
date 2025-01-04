import React from "react";
interface Props{
  vis: string;
}

export const Content = ({vis}: Props) => {
  return (
    <>
      <nav className="content" id="content" style={{display: vis}}>
        <div className="slider-container">
          <div className="slider">
            <div className="slide">
              <a href="#">
                <img src="/Slide1.jpg" alt="Banner 1" />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img src="/Slide2.jpg" alt="Banner 2" />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img src="/Slide3.jpg" alt="Banner 3" />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img src="/Slide4.jpg" alt="Banner 4" />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img src="/Slide5.jpg" alt="Banner 5" />
              </a>
            </div>
          </div>
          <button className="nav-button left">
            <img src="/prev.webp" />
          </button>
          <button className="nav-button right">
            <img src="/next.webp" />
          </button>
          <div className="navigation">
            <div className="nav-dot active"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
          </div>
        </div>

        <div className="main-menu-container">
          <div className="main-menu-ico">
            <a href="">
              <img src="hwahaha" alt="" />
            </a>
            <p>Menu 1</p>
          </div>
          <div className="main-menu-ico">
            <a href="">
              <img src="hwahaha" alt="" />
            </a>
            <p>Menu 2</p>
          </div>
          <div className="main-menu-ico">
            <a href="">
              <img src="hwahaha" alt="" />
            </a>
            <p>Menu 3</p>
          </div>
          <div className="main-menu-ico">
            <a href="">
              <img src="hwahaha" alt="" />
            </a>
            <p>Menu 4</p>
          </div>
          <div className="main-menu-ico">
            <a href="">
              <img src="hwahaha" alt="" />
            </a>
            <p>Menu 5</p>
          </div>
        </div>

        <div className="items-ireng">
          <div className="product-list-container">
            {/* <!-- Produk akan dirender di sini oleh JavaScript --> */}
          </div>
        </div>
      </nav>
    </>
  );
};
