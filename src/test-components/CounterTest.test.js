import { render, screen, fireEvent } from "@testing-library/react";
import CounterTest from "../pages/CounterTest";

describe("<CounterTest/>", () => {
    test("renders the Counter component", () => {
        render(<CounterTest/>);
        const countElement = screen.getByText(/Count:/i);
        const buttonElement = screen.getByText(/Increment!/i);

        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test("increments the count when the button is clicked", () => {
        render(<CounterTest/>);
        const buttonElement = screen.getByText(/Increment!/i);

        fireEvent.click(buttonElement);
        const countElement = screen.getByText(/Count: 1/i);

        expect(countElement).toBeInTheDocument();
    });
});