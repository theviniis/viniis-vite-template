import { Button } from "./Button";

describe("<Button />", () => {
	it("Should render correctly", () => {
		const { getByRole } = render(<Button />);
		const element = getByRole("button");
		expect(element).toBeInTheDocument();
	});
});
