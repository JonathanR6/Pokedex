// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Stats from "./components/Stats";
import Types from "./components/Types";

test("stats should show the elements passed by props", () => {
  const stats = [
    { base_stat: 10 },
    { base_stat: 20 },
    { base_stat: 30 },
    { base_stat: 40 },
  ];

  const component = render(<Stats stats={stats} />);
  component.getByText("vida: 10");
  component.getByText("ataque: 20");
  component.getByText("defensa: 30");
  component.getByText("velocidad: 40");
});

test("types should display elements passed by props", () => {
  const type = "fire";

  const component = render(<Types type={type} />);
  component.getByText(type);
});
