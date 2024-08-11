import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const validateForm = () => {
    if (!username || !email || !phone || !dob) {
      if (!username) alert("Please fill out the Username field.");
      if (!email) alert("Please fill out the Email field.");
      if (!phone) alert("Please fill out the Phone Number field.");
      if (!dob) alert("Please fill out the Date of Birth field.");
      return false;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleClose();
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          flexDirection: "column",
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>User Details Modal</h1>
        <button onClick={handleOpen}>Open Form</button>
      </div>
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <label
                  htmlFor="username"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <label
                  htmlFor="phone"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <label
                  htmlFor="dob"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
