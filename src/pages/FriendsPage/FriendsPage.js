import React, { useState, useEffect } from "react";
import axios from "../../components/axios/axios";
import requests from "../../components/requests";
import "./FriendsPage.css";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchFriends);
      setFriends(request.data);
      return request;
    }
    fetchData();
  }, []);

  let img;

  if (friends.image && friends.image !== "") {
    img = friends.image.medium;
  }

  return (
    <div>
      <div className="row">
        <h2 className="title__friend">Friends</h2>

        <div className="row__posters">
          {friends.map((friend) => {
            return (
              <div className="poster" key={friend.id}>
                <img 
                  key={friend.id}
                  className="row__poster"
                  src={img}
                  alt={friend.name}
                />
                <h4>{friend.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
