import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>{favoritesCtx.total}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
