import { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menuReviews, setMenuReviews] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuReviews(data);
        setLoading(false);
      });
  }, [loading]);
  return [menuReviews];
};

export default useMenu;
