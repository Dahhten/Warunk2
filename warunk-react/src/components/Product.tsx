import React from "react";
interface Props {
  itemImg: string[];
  itemDesc: string[];
  itemTitle: string[];
}

export const Product = ({ itemImg, itemDesc, itemTitle }: Props) => {
  return (
    <>
      <div className="row">
        {itemTitle.map((Title, index) => (
          <div key={index} className="card m-2" style={{ width: "18rem" }}>
            <img src={itemImg[index]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{itemDesc[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
