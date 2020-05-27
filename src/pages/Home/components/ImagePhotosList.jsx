import React from "react";
import { PhotoCard, Loader } from "../../../components";
import Container from "./Elements";

export const ImagePhotosList = ({
  error,
  loading,
  photos = [],
  onSelect,
  onTwitter,
  onInstagram,
  onDownload,
}) => {
  return (
    <>
      <Container>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onSelect={onSelect}
            onTwitter={onTwitter}
            onInstagram={onInstagram}
            onDownload={onDownload}
          />
        ))}
      </Container>
      {loading && <Loader text="Loading" />}
      <div>{error && "Error"}</div>
    </>
  );
};
