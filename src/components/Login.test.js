import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

describe("Login Component", () => {
  it("should render login form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = screen.getByLabelText("Email:");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("Password:");
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it("should display error message on invalid form submission", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    loginButton.click();

    const errorMessage = await screen.findByText(
      /please enter your email and password/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
