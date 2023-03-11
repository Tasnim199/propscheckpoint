import React from 'react'

export default function ProfileBio({name,lastName,bio,profession})
{
  return (
    <div className='bio'>
<div styles={{display:"flex"}}> 
    <h2> Name : </h2>
    <h1> {name}</h1>
</div>
<div styles={{display:"flex"}}> 
    <h2> LastName : </h2>
    <h1> {lastName} </h1>
</div>
<div styles={{display:"flex"}}> 
    <h2> Prrofession : </h2>
    <h1> {profession} </h1>
</div>

<div styles={{display:"flex"}}> 
    <h2> my bio: </h2>
    <h1> {bio} </h1>
</div>
    </div>
  );
  }
