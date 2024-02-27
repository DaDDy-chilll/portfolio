import { useSelector } from "react-redux";


export const PageTitleTail = () => {
  const {pageTitle} = useSelector(state => state.pageInfo);

    return (
      <svg
        width="20"
        height="128"
        viewBox="0 0 24 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 20L23.547 2.07136e-06L0.452994 -2.07136e-06L10 20L14 20ZM12 63.9529L9.99999 63.9529L12 63.9529ZM10 18L9.99999 63.9529L14 63.9529L14 18L10 18ZM9.99999 63.9529L9.99999 120L14 120L14 63.9529L9.99999 63.9529Z"
          fill={pageTitle === 'about' ? 'white':'black'}
        />
      </svg>
    );
  };    
