import { IButton } from "../common/interfaces";

const Button:React.FC<IButton> = ({ title }) => {
  
  return (
    <>
    <button className="btn">{ title }</button>
    </>
  );
}

export default Button;
