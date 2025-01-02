import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
interface Props {
  onSubmit: (image: string, title: string, desc: string) => void;
}

export const Form = ({ onSubmit }: Props) => {
  const [details, setDetails] = useState({
    image: "",
    title: "",
    desc: "",
  });

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {};
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Image */}
        <Input
          onChange={(value: string) => {
            setDetails((prev) => {
              return { ...prev, image: value };
            });
          }}
        ></Input>
        {/* Title */}
        <Input
          onChange={(value: string) => {
            setDetails((prev) => {
              return { ...prev, title: value };
            });
          }}
        ></Input>
        {/* Desc */}
        <Input
          onChange={(value: string) => {
            setDetails((prev) => {
              return { ...prev, desc: value };
            });
          }}
        ></Input>
        <Button
          type="submit"
          onClick={() => onSubmit(details.image, details.title, details.desc)}
        >
          Upload
        </Button>
      </form>
    </>
  );
};
