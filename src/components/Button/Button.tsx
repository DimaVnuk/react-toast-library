import React from 'react';

interface ButtonProps {
   children: string;
}

function Button(props: ButtonProps) {
   return <button>{props.children}</button>;
}

export default Button;
