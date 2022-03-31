import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Display from "../pages/Display";

describe("test <Display/>", () => {
  const Wrapper = () => {
    return (
      <MemoryRouter initialEntries={["/display/7050884"]}>
        <Routes>
          <Route path="display/:imageId" element={<Display />} />
        </Routes>
      </MemoryRouter>
    );
  };

  const mockData = {
    id: 7050884,
    pageURL:
      "https://pixabay.com/photos/clouds-sky-atmosphere-blue-sky-7050884/",
    type: "photo",
    tags: "clouds, sky, atmosphere",
    previewURL:
      "https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_150.jpg",
    previewWidth: 150,
    previewHeight: 100,
    webformatURL:
      "https://pixabay.com/get/g9abeb77b64f406b18ea5a6e2adfff96bcbe290c476d0feabe163839d368969ab426d6f96cd4a20e14f2e9b84907d5578_640.jpg",
    webformatWidth: 640,
    webformatHeight: 427,
    largeImageURL:
      "https://pixabay.com/get/gba210a92a61ec9bca79a44bad9677c9c55aa31d2ea2a2cd7d46d3a95cd31b9d36a0425f2885bac8fab07d158d4cbf4dca94714f1dfaa2b346ca9dcccf5a86d58_1280.jpg",
    imageWidth: 5184,
    imageHeight: 3456,
    imageSize: 2499645,
    views: 211572,
    downloads: 163921,
    collections: 4549,
    likes: 171,
    comments: 47,
    user_id: 25073177,
    user: "Mint_Foto",
    userImageURL: "",
    id_hash: "7050884",
    fullHDURL:
      "https://pixabay.com/get/gef9994d1ca5300e5245668fc71a676088ccf574561a5888860384d1b8af7a6edcfcda4e7ce9645f58ddd27477988edc1eba8d0ed486aea2385b3cf66a5418be6_1920.jpg",
    imageURL:
      "https://pixabay.com/get/gcd93eb7634c2f5a95e5ef74dbfdb251f13cfd65760b85a0e2bf70cf991445aa469537ab5367b1bd3185b39b5d166018e.jpg",
  };

  const unmockedFetch = global.fetch;

  beforeEach(() => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      json: async () => ({
        hits: {
          0: mockData,
        },
      }),
    });
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  test("should first", async () => {
    render(<Wrapper />);
    expect(await screen.findByText("Mint_Foto")).toBeInTheDocument();
  });
});
