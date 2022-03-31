import React from "react";
import { Link } from "react-router-dom";
import { ImgContStyle, ImgStyle } from "../styles/style";

export default function Image(props) {
  return (
    // Link with image and id of the image
    <Link style={ImgContStyle} to={`/display/${props.id}`} key={props.id}>
      <img
        data-testid={`image-test-link-${props.id}`}
        style={ImgStyle}
        src={props.previewURL}
      ></img>
    </Link>
  );
}
