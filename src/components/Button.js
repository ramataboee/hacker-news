import React from 'react';

const ButtonInline = ({
  onClick,
  type = 'button',
  children
})=>
<Button
  type={type}
  className="primary-button"
  onClick={onClick}
>
  {children}
</Button>

const Button = ({
  onClick,
  className,
  type='button',
  children
})=>
<button
  type={type}
  className={className}
  onClick={onClick}
>
  {children}
</button>

export default Button;

export {
  ButtonInline
};
