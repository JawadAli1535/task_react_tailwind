import React from 'react';

import profileImg from '../assets/img/profilelImge.jpeg';

const UserProfile = () => {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-5 items-center border rounded-xl bg-slate-600 text-white p-5">
      <div className="shrink-0">
        <img
          className="w-[150px] h-[150px] rounded-full"
          src={profileImg}
          alt="img"
        />
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua".
      </p>
    </div>
  );
};

export default UserProfile;
