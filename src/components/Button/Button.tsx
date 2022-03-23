import React, { FC } from "react";
import './Button.css'
export interface ButtonProps {
  color: string;
  big?: boolean;
}

const Button: FC<ButtonProps> = ({ children, color, big, ...props }) => {
  
	
	const rootClass = ['my-btn']
	if(big){
		rootClass.push('big')
	}
	return (
    <button className={rootClass.join(' ')} {...props} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
