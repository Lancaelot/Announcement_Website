import React from 'react';
import PropTypes from 'prop-types';
import './selectAnnouncement.scss';

export const SelectAnnouncement = props => (
  <div className="ui form selectAnnouncement">
    <div className="field">
      <select
        onChange={(event) => {
          props.handleFilter(event.target.value);
        }}
      >
        <option
          value="default"
          defaultValue="default"
        >
          Choose announcement
        </option>
        {props.announcements.map(announcement =>
          <option value={announcement.id} key={announcement.id}>
            {announcement.title}
          </option>)
        }
      </select>
    </div>
  </div>
);

SelectAnnouncement.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  announcements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};


