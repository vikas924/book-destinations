import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { it, expect } from "vitest";
import store from "../redux/store";
import SideNav from "../components/Nav";

it("Should render SideNav component correctly", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SideNav />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
