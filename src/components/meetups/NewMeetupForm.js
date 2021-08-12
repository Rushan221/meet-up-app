import React, { useRef } from "react";
import Card from "../user_interface/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetUp(meetUpData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            ref={descriptionInputRef}
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
