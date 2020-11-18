import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postRequest } from '../../../api/api';
import './addAnnuncement.scss';

const handleChange = (event, callBack) => {
  callBack(event.target.value);
};

export const AddAnnouncement = (props) => {

  const [announcementBody, setAnnouncementBody] = useState('');
  const [announcementTitle, setAnnouncementTitle] = useState('');

  return (
    <form
      className="ui form attached fluid message announcementForm"
      onSubmit={(event) => {
        event.preventDefault();
        postRequest(announcementTitle, announcementBody)
          .then(props.handleChange);
        setAnnouncementBody('');
        setAnnouncementTitle('');
      }}
    >
      <div className="header aligned center">
        Add new announcement
      </div>
      <label htmlFor="title">
        Title
        <input
          name="title"
          className="field"
          placeholder="Enter title for announcement"
          value={announcementTitle}
          onChange={event => handleChange(event, setAnnouncementTitle)}
        />
      </label>
      <label htmlFor="body">
        Text
        <textarea
          name="body"
          className="field"
          value={announcementBody}
          placeholder="Enter some description"
          onChange={event => handleChange(event, setAnnouncementBody)}
        />
      </label>
      <div className="ui two bottom buttons">
        <button type="submit" className="floated ui secondary button">
          Save
        </button>
        <button
          className="floated ui button"
          type="button"
          onClick={() => {
            setAnnouncementBody('');
            setAnnouncementTitle('');
          }}
        >
          Abort
        </button>
      </div>
    </form>
  );
};

AddAnnouncement.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
