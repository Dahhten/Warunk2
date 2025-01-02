{
  /*import { ListGroup } from "./components/ListGroup";*/
}
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Form } from "./components/Form";
import { Product } from "./components/Product";
import { useState } from "react";

export const App = () => {
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
  const [data, setData] = useState([itemValue]);
  const [input, setInput] = useState("");
  const [alertnya, setAlertnya] = useState("");
  const [visibility, setVisibility] = useState(false);

  const onSelect = (productnya: string) => {
    console.log(productnya);
  };

  return (
    <div className="m-3">
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
