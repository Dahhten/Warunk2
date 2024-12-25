import { ListGroup } from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";

export const App = () => {
  let product = ["Cardigan", "Batik", "Polo", "Kotak-kotak", "Compression"];
  const [alertnya, setAlertnya] = useState("");

  const onSelect = (productnya: string) => {
    console.log(productnya);
  };

  const Login = (name: string) => {
    setAlertnya(name);
  };

  return (
    <div>
      <ListGroup product={product} category="Baju" onSelectItem={onSelect} />
      <Alert>{alertnya}</Alert>
      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Edit
      </Button>
    </div>
  );
};
