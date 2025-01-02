interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  type?: "button" | "submit";
  onClick: () => void;
}

export const Button = ({
  children,
  color = "primary",
  type = "button",
  onClick,
}: Props) => {
  return (
    <>
      <button type={type} className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
