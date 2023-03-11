import React from "react";
import ProfileBio from "./ProfileBio";
import ProfileImage from "./ProfileImage";

export default function Profile() {
  const profileData = {
    name: " Tasnime",
    lasteName: "Zidi",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.SFrIQsSigi91JF0KBHOpeQHaNK&pid=Api&rs=1&c=1&qlt=95&w=63&h=113 ",
    profession: "teacher",
    bio: "  My experience and formal education have aided me in developing my advertising skill set and allowed me to work for five large corporations. My creative mindset, advertising.....",
  };
  return (
    <div className="prof">
      <ProfileImage>
        <img src={profileData.image} alt="" />
      </ProfileImage>
      <ProfileBio
        name={profileData.name}
        lasteName={profileData.lasteName}
        bio={profileData.bio}
        profession={profileData.profession}
      />
    </div>
  );
}
