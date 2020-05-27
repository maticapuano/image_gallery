import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

import Container, { Picture } from "./elements";
import { Image, Avatar } from "../../components";

export const PhotoCard = ({
  photo,
  onSelect,
  onTwitter,
  onInstagram,
  onDownload,
}) => {
  const calSize = (photo) => (photo.width > photo.height ? "sm" : "md");
  const cardEl = useRef(null);

  return (
    <Container size={calSize(photo)} ref={cardEl}>
      <Picture>
        <Image src={photo.urls.regular} color={photo.color} />
        <Picture.Content
          onClick={() => {
            onSelect({
              ...photo,
              DOMrect: cardEl.current.getBoundingClientRect(),
            });
          }}
        >
          <Picture.RRSS>
            {photo.user.twitter_username && (
              <Picture.RRSS.Icon
                twitter
                onClick={(e) => {
                  e.stopPropagation();
                  onTwitter(photo);
                }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Picture.RRSS.Icon>
            )}

            {photo.user.instagram_username && (
              <Picture.RRSS.Icon
                instagram
                onClick={(e) => {
                  e.stopPropagation();
                  onInstagram(photo);
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Picture.RRSS.Icon>
            )}

            <Picture.RRSS.Icon
              download
              onClick={(e) => {
                e.stopPropagation();
                onDownload(photo);
              }}
            >
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
            </Picture.RRSS.Icon>
          </Picture.RRSS>
        </Picture.Content>
      </Picture>
      <Container.Content>
        <Avatar src={photo.user.profile_image.small} />
        <Container.Text>
          <Container.Title>{photo.user.name}</Container.Title>
          <Container.Description>
            {photo.description ?? photo.alt_description}
          </Container.Description>
        </Container.Text>
      </Container.Content>
    </Container>
  );
};
