import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { it, expect } from "vitest";
import store from "../redux/store";
import Login from "../components/Login";

it("Should render Login component correctly", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
