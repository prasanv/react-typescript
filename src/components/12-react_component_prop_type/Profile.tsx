import React from 'react'

export type profileProps = {
  name: string;
  msgCount: number;
}

const Profile = ({name, msgCount}:profileProps) => {
  return (
    <div>
      <p>Hi {name}, you have {msgCount} unread messages</p>
    </div>
  )
}

export default Profile
