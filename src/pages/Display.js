import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneImage } from "../utils/fetchImages";
import { BigImgStyle } from "../styles/style";

export default function Display() {
  const { imageId } = useParams();
  const [image, setImage] = useState({});

  // fetching picture details based on id given in URI segment
  useEffect(() => {
    fetchOneImage(imageId).then((res) => setImage(res.hits[0]));
  }, []);

  return (
    <div>
      <img style={BigImgStyle} src={image.fullHDURL}></img>
      <p>photographer: </p>{" "}
      <h2 data-testid={`image-test-user-${image.id}`}>{image.user}</h2>
      <p>tags : {image.tags}</p>
      <p>views : {image.views}</p>
      <p>downloads : {image.downloads}</p>
      <p>image size : {((image.imageSize || 0) / 1024 / 1024).toFixed(2)} MB</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
