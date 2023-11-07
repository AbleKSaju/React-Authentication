import React from 'react';

const ProfileImage = ({ userInfo }) => {
    console.log('profile Image',userInfo.profileImage);
  return (
    <div className='h-10 w-10 rounded-lg'>
      <img className='w-full h-full rounded-3xl'
      src={`http://localhost:5000/images/${userInfo.profileImage}`}
      alt=""
    />
    </div>
    
  );
};

export default ProfileImage;