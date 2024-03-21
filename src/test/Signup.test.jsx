import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { it, expect } from "vitest";
import store from "../redux/store";
import Signup from "../components/Signup";
it("Should render Registration component correctly", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
