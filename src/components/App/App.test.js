import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button HTML element", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn NOT TO react/i);
  expect(linkElement).toBeInTheDocument();
});
