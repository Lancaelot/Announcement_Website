import React, { useState, useEffect } from 'react';
import './App.scss';
import { request } from './api/api';
import { AnnouncementList } from './Components/Announcement/announcementsList';
import { AddAnnouncement } from './Components/Forms/addAnnouncement';
import { SearchAnnouncement } from './Components/Forms/searchAnnouncement';
import { SelectAnnouncement }
  from './Components/Forms/selectAnnouncement/selectAnnouncement';

const apiSection = 'posts';

async function getAnnouncements() {
  const announcementsFromServer = await request(apiSection, { method: 'GET' });

  return announcementsFromServer;
}

const App = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [initialAnnouncements, setInitialAnnouncements] = useState([]);

  const handleChange = () => {
    getAnnouncements()
      .then(
        announcementFromServer => setAnnouncements(announcementFromServer),
      );
  };

  const handleFilter = (value) => {
    getAnnouncements()
      .then(
        (announcementFromServer) => {
          value !== 'default'
            ? setAnnouncements(announcementFromServer
              .filter(announcement => announcement.title.includes(value)
                || announcement.title.includes(value)
              //    eslint-disable-next-line
                || announcement.id == value))
            : setAnnouncements(announcementFromServer);
        },
      );
  };

  useEffect(() => getAnnouncements()
    .then(
      (announcementFromServer) => {
        setInitialAnnouncements(announcementFromServer);

        return setAnnouncements(announcementFromServer);
      },
    ), []);

  return (
    <div className="App">
      <div className="App__row">
        <SelectAnnouncement
          announcements={initialAnnouncements}
          handleFilter={handleFilter}
        />
        <SearchAnnouncement
          handleFilter={handleFilter}
          handleGet={handleChange}
        />
      </div>
      <div className="App__body">
        <AnnouncementList
          announcements={announcements}
          handleChange={handleChange}
        />
        <AddAnnouncement
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
