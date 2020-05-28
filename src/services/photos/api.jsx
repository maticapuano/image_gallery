import { useEffect, useState } from "react";
import { crudder, removeDuplicates } from "../../utils";

const base = crudder("https://api.unsplash.com/");
const apiPhotos = base("photos");
const apiSearchPhotos = base("search/photos");

const apiConfig = {
  accessKey: process.env.API_KEY,
};

export function useGetPhotos(
  query,
  page = 1,
  per_page = 15,
  order_by = "latest"
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPhotos([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    (query ? apiSearchPhotos : apiPhotos)
      .get({
        query,
        client_id: apiConfig.accessKey,
        page,
        per_page,
        order_by,
      })
      .then((res) => (query ? res.data.results : res.data))
      .then((res) => {
        setPhotos((prevPhotos) => removeDuplicates([...prevPhotos, ...res]));
        setHasMore(res.length > 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [query, page, per_page, order_by]);

  return { loading, error, photos, hasMore };
}
