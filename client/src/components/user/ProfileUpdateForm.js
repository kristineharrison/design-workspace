import React from "react";
import { useState } from "react";
import { Button, FormField, Textarea } from "../ui";

export default function UserUpdateForm({ profile, setProfile, handleClick })  {
  const [bio, setBio] = useState("");
  
  // Update profile
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bio: bio,
      }),
    }) 
        .then((resp) => resp.json())
        .then((data) => setProfile(data));
        handleClick();
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
          <FormField>
            <Textarea
              id="bio"
              rows="3"
              placeholder="Required"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormField>
          <FormField>
              <Button color="primary" type="submit">
                Submit
              </Button>
          </FormField>
        </form>
    </div>
  );
}

