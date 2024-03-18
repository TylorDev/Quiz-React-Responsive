import { Link } from "react-router-dom";
export function BotonNormal({ children, css, onClick }) {
  return (
    <>
      <button className={"btn-normal " + css} onClick={onClick}>
        <div>{children}</div>
      </button>
    </>
  );
}
