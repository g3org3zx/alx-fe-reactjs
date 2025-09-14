// src/components/UserProfile.jsx

function UserProfile(props) {
  return (
    <div      
          style={{
            border: "1px solid gray",   // thin border
            padding: "10px",            // space inside
            margin: "10px",             // space outside
            borderRadius: "8px",        // rounded corners
            backgroundColor: "#f9f9f9"  // light gray background
          }}
        >
      <h2 style={{ color: "blue"}}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: "bold"}}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

