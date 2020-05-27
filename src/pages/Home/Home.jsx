import React, { useState, useRef, useCallback } from "react";
import { ImagePhotosList, NavBar } from "./components/";
import { PhotoDetailModal } from "../../components";
import { useGetPhotos } from "../../services/photos";

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const { photos, hasMore, loading, error } = useGetPhotos(query, page, 12);
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const onSelect = (photo) => {
    setOpen(true);
    setSelectedPhoto(photo);
  };
  const onTwitter = (photo) => {
    window.open(`https://twitter.com/${photo.user.twitter_username}`, "_blank");
  };
  const onInstagram = (photo) => {
    window.open(
      `https://www.instagram.com/${photo.user.instagram_username}/`,
      "_blank"
    );
  };
  const onDownload = (photo) => {
    window.open(photo.links.download, "_blank");
  };
  const onSearch = (query) => {
    setQuery(query);
  };

  return (
    <>
      {open && (
        <PhotoDetailModal
          photo={selectedPhoto}
          onClose={() => setOpen(false)}
          onTwitter={onTwitter}
          onInstagram={onInstagram}
          onDownload={onDownload}
        />
      )}
      <NavBar onSearch={onSearch} />
      <ImagePhotosList
        photos={photos}
        error={error}
        loading={loading}
        onSelect={onSelect}
        onTwitter={onTwitter}
        onInstagram={onInstagram}
        onDownload={onDownload}
      />
      <div style={{ height: 60 }} ref={lastElementRef} />
    </>
  );
};

export default Home;
