import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./Page";

describe('Page', () => {
    const pullRequests = [{
        html_url: "https://www.pr1.com",
        id: 0,
        title: "pr 1 title",
        created_at: "2020-10-26T15:02:44Z",
        labels: [
            {
                id: 0,
                color: "red",
                name: "bug"
            }
        ]
    }];
    render(<Page pullRequests={pullRequests} />)

    it('should have a greeting to Brad Kahl', () => {
        const element = screen.getByText('Hello, Brad Kahl!');
        expect(element).toBeInTheDocument();
    })
})