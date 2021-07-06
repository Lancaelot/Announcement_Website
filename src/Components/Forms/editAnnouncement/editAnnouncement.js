import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteRequest, patchRequest } from '../../../api/api';
import './editAnnouncement.scss';

export const EditAnnouncement = (props) => {
  const { body, id, handleChange } = props;
  const [editBody, setEditBody] = useState(body);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="ui three bottom attached buttons">
        <button
          className="ui black button"
          type="button"
          onClick={() => setIsEdit(!isEdit)}
        >
          {!isEdit
            ? 'Edit announcement'
            : 'Hide edit panel'
          }
        </button>
        <button
          className="ui red button"
          type="button"
          onClick={() => deleteRequest(id)
            .then(handleChange)}
        >
          Delete
        </button>
      </div>
      {isEdit && (
        <form
          className="ui form success"
          onSubmit={(event) => {
            event.preventDefault();
            patchRequest(editBody, id)
              .then(handleChange);
          }}
        >
          <div className="field">
            <textarea
              type="text"
              rows="4"
              value={editBody}
              onChange={
                event => setEditBody(event.target.value)
              }
            />
          </div>
          <button className="ui submit button" type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

EditAnnouncement.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
