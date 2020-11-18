import React from 'react';
import PropTypes from 'prop-types';
import { Announcement } from './announcement';
import './announcement.scss';

export const AnnouncementList = (props) => {
  const { announcements } = props;

  return (
    <>
      <ul>
        {announcements.map(
          announcement => (
            <li className="ui floating message" key={announcement.id}>
              <Announcement
                {...announcement}
                handleChange={props.handleChange}
              />
            </li>
          ),
        )}
      </ul>
    </>
  );
};

AnnouncementList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  announcements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

