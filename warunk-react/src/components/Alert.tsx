import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  visibility?: boolean;
  onClick: () => void;
}

export const Alert = ({ children, visibility = false, onClick }: Props) => {
  return (
    <div
      className={
        "alert alert-primary alert-dismissible fade show " +
        (visibility === false ? "invis" : "")
      }
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};
