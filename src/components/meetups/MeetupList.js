import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.MeetupList.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}
