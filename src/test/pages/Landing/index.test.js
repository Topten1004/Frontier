import React from "react";
import { render } from "../../test.utils";
import HomePage from "../../../pages";

describe("Landing", () => {

  it("should render the Landing", () => {

    jest.mock("next/image", () => {
      return () => <></>;
    });

    render(<HomePage />);
   
  });
});