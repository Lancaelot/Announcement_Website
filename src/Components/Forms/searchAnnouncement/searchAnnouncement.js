import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchAnnouncement.scss';

export const SearchAnnouncement = (props) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <form
      className="ui search searchAnnouncement"
      onSubmit={
        (event) => {
          event.preventDefault();
          props.handleFilter(searchInput);
        }
      }
    >
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder="Search announcement..."
          value={searchInput}
          onChange={
            event => setSearchInput(event.target.value)
          }
        />
        <i className="search icon" />
      </div>
      <div className="results" />
      <button
        type="submit"
        className="ui secondary button searchAnnouncement__button"
      >
        Okay
      </button>
      <button
        type="button"
        className="ui red button searchAnnouncement__button"
        onClick={() => {
          setSearchInput('');
          props.handleGet();
        }}
      >
        Reset
      </button>
    </form>
  );
};

SearchAnnouncement.propTypes = {
  handleGet: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
