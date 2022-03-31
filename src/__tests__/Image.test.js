import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Image from "../components/Image";

describe("checking if component renders ", () => {
  const image = {
    id: 7050884,
    previewURL:
      "https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_150.jpg",
  };

  test("check if 1 component renders", () => {
    const Wrapper = () => {
      return (
        <MemoryRouter>
          <Image {...image} />
        </MemoryRouter>
      );
    };
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId("image-test-link-7050884")).toBeDefined();
  });
});
