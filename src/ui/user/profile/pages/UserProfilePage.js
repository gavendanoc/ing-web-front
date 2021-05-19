import React, { useState } from 'react';

import box from '../../../../shared/images/box.webp';

import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
  console.log("in profile");

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

  const goToChangePass = () => {
    setPageState('pass');
  }

  const changedProfile = (newData) => {
    data = newData;
    setPageState('profile');
  }

  console.log(pageState);

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

  let content
  switch (pageState) {
    case 'profile':
      content = <UserProfile
        goToEditProfile={goToEditProfile}
        userData={data}
      />
      break;
    default:
  }

  return (
    <div className="BackgroundImageContainer">
      <img align="middle" alt="react" src={box} className="BackgroundDarkImage" />
      <div className="container ContentOverImage">
        {content}
      </div>
    </div>
  );

}

export default UserProfilePage;