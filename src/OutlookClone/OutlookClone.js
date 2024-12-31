import React, { useState, useEffect } from "react";
import "./style.css";

const OutlookClone = () => {
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [favorite, setFavorite] = useState([]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?page=${page}`
      );
      const result = await response.json();
      setEmailList(result.list);
      setTotal(result.total);
      setPage(page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const goToPage = (e) => {
    const capturedPage = e.target.getAttribute("data-id");
    if (capturedPage == page) return;
    setPage(capturedPage);
  };

  const markFavorite = (list) => {
    // console.log('hererer', list);

    if (favorite.filter((fav) => fav.id === list.id).length > 0) return;

    setFavorite((prev) => {
      let updatedFavorite = [...prev];
      updatedFavorite.push(list);
      console.log(updatedFavorite);
      return updatedFavorite;
    });
  };

  const handleFilter = (e) => {
    const capturedFilter = e.target.getAttribute('data-id');
    if (capturedFilter === 'favorite') setEmailList(favorite);
  }

  return (
    <div>
      <div className="header" onClick={(e) => handleFilter(e)}>
        <div>Filter By:</div>
        <div data-id="unread">Unread</div>
        <div data-id="read">Read</div>
        <div data-id="favorite">Favorite</div>
      </div>
      <div className="list-container">
        {emailList.map((list, index) => (
          <div className="list" key={list.id}>
            {/* <div>{list.id}</div>
                <div>{list.subject}</div> */}
            <div className="avatar">{list.from.name[0].toUpperCase()}</div>
            <div>{list.short_description}</div>
            <div className="favorite" onClick={() => markFavorite(list)}>
              {favorite.filter((fav) => fav.id === list.id).length > 0
                ? "Favorite"
                : "Mark as Favorite"}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array(Math.ceil(total / 10))
          .fill(null)
          .map((_, index) => (
            <div
              className="page-no"
              style={{ background: page === index + 1 && "aquamarine" }}
              key={index}
              data-id={index + 1}
              onClick={(e) => goToPage(e)}
            >
              {index + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default OutlookClone;
