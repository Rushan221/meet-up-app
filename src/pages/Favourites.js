import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

export default function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);
  let content;
  if (favouriteCtx.total === 0) {
    content = <p>No Favourites yet.</p>;
  } else {
    content = <MeetupList MeetupList={favouriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
