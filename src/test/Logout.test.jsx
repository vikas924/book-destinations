import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { it, expect } from "vitest";
import store from "../redux/store";
import Logout from "../components/Logout";

it("Should render Logout component correctly", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Logout />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
