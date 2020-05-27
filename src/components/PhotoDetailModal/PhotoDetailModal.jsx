import React, { useEffect, useState } from "react";
import { useTransition } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faHeart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Avatar, IconButton } from "../../components";
import Container, { Card, Accent, Text, Separator, MdHidden } from "./elements";
import { hexToRgba, formatDate } from "../../utils";

export const PhotoDetailModal = ({
  photo,
  onClose,
  onDownload,
  onTwitter,
  onInstagram,
}) => {
  const [rgbaColor, setRgbaColor] = useState("rgba(0,0, 0, 0.8)");

  const transitions = useTransition(photo, null, {
    from: {
      position: "fixed",
      width: photo.DOMrect.width,
      height: photo.DOMrect.height,
      top: photo.DOMrect.top,
      left: photo.DOMrect.left,
    },
    enter: {
      width: window.innerWidth,
      height: window.innerHeight,
      top: 0,
      left: 0,
    },
    config: { mass: 1, tension: 250, friction: 22 },
  });

  const setUp = () => {
    document.body.style.overflow = "hidden";
    setRgbaColor(hexToRgba(photo.color, 0.8));
    return () => {
      document.body.style.overflow = null;
    };
  };
  useEffect(setUp, []);
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Container key={key} style={props} color={rgbaColor} onClick={onClose}>
          <Container.Close onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </Container.Close>

          <Card onClick={(e) => e.stopPropagation()}>
            <Card.Header>
              <Avatar src={item.user.profile_image.small} size="50px" />
              <Card.Header.Information>
                <Text.Title>
                  {item.description ?? item.alt_description}
                </Text.Title>
                <Text>
                  By <Accent>{item.user.name}</Accent>
                </Text>
              </Card.Header.Information>
              <Card.Header.Actions>
                <IconButton
                  onClick={() => onDownload(item)}
                  Icon={<FontAwesomeIcon icon={faCloudDownloadAlt} />}
                >
                  Download
                </IconButton>
              </Card.Header.Actions>
            </Card.Header>
            <Card.Picture color={item.color}>
              <Card.Picture.Img src={item.urls.regular} />
            </Card.Picture>
            <Card.Content>
              <Card.Content.Information>
                <Text.Information>
                  {formatDate(item.created_at)}
                </Text.Information>
                <Text.Information>
                  <FontAwesomeIcon icon={faHeart} />
                  {item.likes} likes
                </Text.Information>
              </Card.Content.Information>
              <Separator />
              <main>
                <Card.Content.Description>
                  {item.description && (
                    <>
                      <Text.Title>Description</Text.Title>
                      <Text>{item.description}</Text>
                    </>
                  )}

                  {item.description && item.alt_description && <Separator />}
                  {item.alt_description && (
                    <>
                      <Text.Title>Alternative</Text.Title>
                      <Text>{item.alt_description}</Text>
                    </>
                  )}
                </Card.Content.Description>
                <Card.Content.Actions>
                  <Text.Information>Author</Text.Information>
                  <Text.Title>{item.user.name}</Text.Title>
                  <Text>{item.user.bio}</Text>
                  <section>
                    {item.user.twitter_username && (
                      <IconButton
                        onClick={() => onTwitter(item)}
                        sm
                        Icon={
                          <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ color: "#00acee" }}
                          />
                        }
                      >
                        Twitter
                      </IconButton>
                    )}
                    {item.user.instagram_username && (
                      <IconButton
                        onClick={() => onInstagram(item)}
                        sm
                        Icon={
                          <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ color: "#e4405f" }}
                          />
                        }
                      >
                        Instagram
                      </IconButton>
                    )}
                  </section>
                  <Separator />
                  <IconButton
                    expanded
                    accent
                    Icon={<FontAwesomeIcon icon={faHeart} />}
                  >
                    Like
                  </IconButton>
                  <MdHidden style={{ marginTop: "1rem" }}>
                    <IconButton
                      onClick={() => onDownload(item)}
                      expanded
                      Icon={<FontAwesomeIcon icon={faCloudDownloadAlt} />}
                    >
                      Download
                    </IconButton>
                  </MdHidden>
                </Card.Content.Actions>
              </main>
            </Card.Content>
          </Card>
        </Container>
      )
  );
};
