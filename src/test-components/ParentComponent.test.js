import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "../components/ParentComponent";

describe("<ParentComponent/>", () => {
    test('updates the parent component text when the child button is clicked', () => {
        render(<ParentComponent/>);

        const inputElement = screen.getByRole("textbox");
        const submitButton = screen.getByRole("button", { name: /Submit/i });

        fireEvent.change(inputElement, { target: { value: "Hello World" } });
        fireEvent.click(submitButton);

        const updatedText = screen.getByText(/Text: Hello World/i);
        expect(updatedText).toBeInTheDocument();
    });
});