import { useSelector } from "react-redux";

export const PageTitleHead = () => {
  const { pageTitle } = useSelector((state) => state.pageInfo);

  return (
    <svg
      width="20"
      height="128"
      viewBox="0 0 24 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 131.547L23.547 120L12 108.453L0.452989 120L12 131.547ZM12 63.9529L9.99999 63.9529L12 63.9529ZM10 -3.5877e-07L9.99999 63.9529L14 63.9529L14 3.5877e-07L10 -3.5877e-07ZM9.99999 63.9529L9.99999 120L14 120L14 63.9529L9.99999 63.9529Z"
        fill={pageTitle === "about" ? "white" : "black"}
      />
    </svg>
  );
};
