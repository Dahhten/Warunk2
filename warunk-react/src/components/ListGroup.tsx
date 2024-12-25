import { useState } from "react";

interface Props{
  product: string[];
  category: string;
  onSelectItem: (itemnya: string) => void;
}

export const ListGroup = ({product, category, onSelectItem}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{category}</h1>
      {product.length === 0 && <h1>Abis barangnya brok</h1>}
      <ul className="list-group">
        {product.map((Catalog, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={Catalog}
            onClick={() => {
              onSelectItem(Catalog);
              setSelectedIndex(index);
            }}
          >
            {Catalog}
          </li>
        ))}
      </ul>
    </>
  );
};
