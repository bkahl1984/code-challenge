import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe('Greeting Component', () => {
    it('should have a greeting component', () => {
        render(<Greetings name={"John Doe"} />)

        const element = screen.getByTestId('greeting-component')
        expect(element).toHaveTextContent('Hello, John Doe!')
    })
})