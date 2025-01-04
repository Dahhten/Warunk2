import React, { useState } from "react";
interface Props {
  onChange: (value: string) => void;
}

export const Input = ({ onChange }: Props) => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1" 
          onChange={(e: React.ChangeEvent<any>) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
