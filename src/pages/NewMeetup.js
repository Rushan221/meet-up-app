import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

export default function NewMeetup() {
  const history = useHistory();

  function addMeetUpHandler(meetupData) {
    fetch(
      "https://meet-up-app-e2ff0-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}
