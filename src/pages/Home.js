import { findByLabelText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Image from "../components/Image";
import fetchImages from "../utils/fetchImages";
import {
  ImgMainContStyle,
  MainContStyle,
  PaginationButtonStyle,
  PaginationCont,
} from "../styles/style";

function Home() {
  const [images, setImages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // fetching pictures and storing them in setImages
  useEffect(() => {
    fetchImages(searchParams.get("page") || 1).then((res) =>
      setImages(res.hits)
    );
  }, [searchParams]);

  const pagination = [];
  for (let index = 1; index <= 26; index++) {
    pagination.push(
      <button
        style={PaginationButtonStyle}
        href="#"
        onClick={() => {
          setSearchParams({ page: index });
        }}
      >
        {index}
      </button>
    );
  }

  return (
    <div style={MainContStyle}>
      <div style={ImgMainContStyle}>
        {images.map((image) => {
          return <Image {...image}></Image>;
        })}
      </div>
      <div style={PaginationCont}>{pagination}</div>
    </div>
  );
}
export default Home;
