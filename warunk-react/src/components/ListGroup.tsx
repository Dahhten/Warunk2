export const ListGroup = () => {
  let Product = ["Sendal", "Sepatu", "Baju", "Tas", "Celana"];
  return (
    <>
      <h1>Listnya nih</h1>
      {Product.length === 0 && <h1>Abis barangnya brok</h1>}
      <ul className="list-group">
        {Product.map((Catalog) => (
          <li
            className="list-group-item"
            key={Catalog}
            onClick={() => {
              console.log(Catalog);
            }}
          >
            {Catalog}
          </li>
        ))}
      </ul>
    </>
  );
};
