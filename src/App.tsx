{
  /*import { ListGroup } from "./components/ListGroup";*/
}
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Form } from "./components/Form";
import { Product } from "./components/Product";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { useState } from "react";

export const App = () => {
  let user = {
    nama: localStorage.getItem("nama"),
    title: localStorage.getItem("title"),
  };

  let welcomeName = document.getElementById("login-name");

  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;
  const slideCount = slides.length;
  const interval = 6000;

  const productContainer = document.querySelector(".product-list-container");

  const itemValue = [
    {
      Img: "",
      Title: "",
      Desc: "",
    },
  ];
  let itemImg = ["img"];
  let itemDesc = ["title"];
  let itemTitle = ["desc"];
  const [login, setLogin] = useState("flex");
  const [navRight, setNavRight] = useState("flex");
  const [navRec, setNavRec] = useState("none");
  const [contentPage, setContentPage] = useState("none");
  const [data, setData] = useState([itemValue]);
  const [input, setInput] = useState("");
  const [alertnya, setAlertnya] = useState("");
  const [visibility, setVisibility] = useState(false);
  const onSelect = (productnya: string) => {
    console.log(productnya);
  };

  return (
    <div>
      <Navbar
        styleNavRight={navRight}
        styleNavRec={navRec}
        handleClick={() => {
          setLogin("none");
          setNavRight("none");
          setNavRec("flex");
          setContentPage("block");
        }}
      ></Navbar>
      <Login
        vis={login}
        handleSubmit={() => {
          if (user.nama !== null) {
            // alert("Halo " + user.nama + " " + user.title + " ! selamat datang kembali di Warunk.");
            setLogin("none");
            setNavRight("none");
            setNavRec("flex");
            setContentPage("block");
          }
          console.log(user.nama);
          console.log(user.title);
        }}
      ></Login>
      <Content vis={contentPage}></Content>
      <Footer></Footer>
      {/*<ListGroup product={product} category="Baju" onSelectItem={onSelect} />*/}
      <Product
        itemImg={itemImg}
        itemDesc={itemDesc}
        itemTitle={itemTitle}
      ></Product>
      <Alert
        visibility={visibility}
        onClick={() => {
          setVisibility(false);
        }}
      >
        {alertnya}
      </Alert>
      {/*Alert*/}
      <Input
        onChange={(value: string) => {
          setInput(value);
        }}
      ></Input>
      <Button
        onClick={() => {
          setVisibility(true);
          setAlertnya(input);
        }}
      >
        Edit
      </Button>

      <div className="mt-5">
        <Form
          onSubmit={(image: string, title: string, desc: string) => {
            itemImg.push(image);
            itemTitle.push(title);
            itemDesc.push(desc);
            console.log(itemImg);
            console.log(itemTitle);
          }}
        ></Form>
      </div>
    </div>
  );
};
