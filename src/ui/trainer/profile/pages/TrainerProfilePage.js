import React, { useState } from 'react';

import TrainerProfile from '../components/TrainerProfile';


const TrainerProfilePage = () => {
  const [pageState, setPageState] = useState('profile');
  let data =  JSON.parse(localStorage.getItem('data'));
  const loading = false;
  const error = false;
  console.log(data);

  const goToProfile = () => {
    setPageState('profile');
  }

  const goToEditProfile = () => {
    setPageState('edit');
  }

  const changedProfile = (data) => {
    setPageState('profile');
  }

  if (loading) {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-0" role="alert">
        {error.message}
      </div>
    );
  }

  switch (pageState) {
    case 'profile':
      return (
        <TrainerProfile
          goToEditProfile={goToEditProfile}
          trainerData={data}
        />
      );
    default:
  }
}

export default TrainerProfilePage;