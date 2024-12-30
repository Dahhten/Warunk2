{
  /*import { ListGroup } from "./components/ListGroup";*/
}
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Product } from "./components/Product";
import { useState } from "react";

export const App = () => {
  const [itemImgTemp, setItemImgTemp] = useState("");
  const [itemImg, setItemImg] = useState<string[]>([]);
  const [itemTitleTemp, setItemTitleTemp] = useState("");
  const [itemTitle, setItemTitle] = useState([]);
  const [itemDescTemp, setItemDescTemp] = useState("");
  const [itemDesc, setItemDesc] = useState([]);
  const [item, setItem] = useState<string[]>([]);
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
      {/*Image */}
      <Input
        onChange={(value: string) => {
          setItemImgTemp(value);
        }}
      ></Input>
      {/* Title */}
      <Input
        onChange={(value: string) => {
          setItemTitleTemp(value);
        }}
      ></Input>
      {/* Desc */}
      <Input
        onChange={(value: string) => {
          setItemDescTemp(value);
        }}
      ></Input>
      <Button
        onClick={() => {
          setVisibility(true);
          setAlertnya(input);
          setItem([...item]);
        }}
      >
        Edit
      </Button>
    </div>
  );
};
