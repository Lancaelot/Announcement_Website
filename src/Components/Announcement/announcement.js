import React from 'react';
import PropTypes from 'prop-types';
import { EditAnnouncement } from '../Forms/editAnnouncement/';
import './announcement.scss';

export const Announcement = (props) => {

  const { title, body, createdAt } = props;

  return (
    <>
      <div className="header">{title}</div>
      <p>{body}</p>
      <p>{createdAt.substring(0,10)}</p>
      <EditAnnouncement {...props} />
    </>
  );
};

Announcement.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

