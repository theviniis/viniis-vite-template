import { ComponentProps, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	return <button ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button };
