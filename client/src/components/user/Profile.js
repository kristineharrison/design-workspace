import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileUpdateForm from "./ProfileUpdateForm";
import { Button } from "../ui";

export default function Profile()  {
  const [profile, setProfile] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setProfile);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <Wrapper>
        <>
          {/* <img src={profile.avatar} alt="User Avatar"/> */}
          <div>
            
            <h2>Hello, {profile.first_name}!</h2>
            <h3>What project would you like to work on today?</h3>
            <p>Hello</p>
            <br />
              <div className="update-button">
                <Button variant="outline" onClick={handleClick}>Update</Button>
              </div>
              {showForm ? <ProfileUpdateForm profile={profile} setProfile={setProfile} handleClick={handleClick} /> : null}
          </div>
        </>
    </Wrapper>
  );
}

const Wrapper = styled.section`  
  max-width: 800px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  button,
  textarea {
    width: 70%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    img {
      max-width: 200px;
    }
  }

  img {
    max-height: 300px;
    padding: 20px 30px;
  }
  
  div.update-button {
    display:flex;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 10px;
  }

  div.no-profile {
    display:flex;
    align-items: center;
    width: 50%;
  }
`;