import { useState } from "react";
import "../styles/RoomAllot.css";
import { useNavigate } from "react-router-dom";

function RoomAllot() {
  const [formData, setFormData] = useState({
    isSingle: true,
    isAttached: true,
    floor: 1,
  });
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate("/stage");
  };
  return (
    <div className="roomAllot">
      {/* header */}
      <div className="roomAllot__header">
        <h1>ROOM ALLOTMENT</h1>
      </div>

      {/* form */}
      <form className="roomAllot__form" onSubmit={handleSubmit}>
        <h2>Please Select Your Preference</h2>
        <label>
          <strong>1.</strong> Single or Double Sharing
        </label>
        <br />
        <div className="roomAllot__prefer">
          <div className="roomAllot__radio">
            <input
              onChange={(e) =>
                setFormData({ ...formData, isSingle: e.target.value })
              }
              type="radio"
              id="single"
              value={formData.isSingle}
              name="option1"
            ></input>
            <label for="single">Single</label>
          </div>
          <div className="roomAllot__radio">
            <input
              type="radio"
              id="double"
              onChange={(e) =>
                setFormData({ ...formData, isSingle: e.target.value })
              }
              value={!formData.isSingle}
              name="option1"
            ></input>
            <label for="double">Double</label>
          </div>
        </div>
        <label htmlFor="">
          <strong>2.</strong> Attached or Non Attached
        </label>
        <div className="roomAllot__prefer">
          <div className="roomAllot__radio">
            <input
              type="radio"
              onChange={(e) =>
                setFormData({ ...formData, isAttached: e.target.value })
              }
              value={formData.isAttached}
              id="attached"
              name="option2"
            ></input>
            <label for="attached">Attached</label>
          </div>
          <div className="roomAllot__radio">
            <input
              type="radio"
              onChange={(e) =>
                setFormData({ ...formData, isAttached: e.target.value })
              }
              value={!formData.isAttached}
              id="nonattached"
              name="option2"
            ></input>
            <label for="nonattached">Non Attached</label>
          </div>
        </div>
        <label htmlFor="">
          <strong>3.</strong> Please Select a prefered floor
        </label>
        <div className="roomAllot__prefer">
          <div className="roomAllot__radio">
            <input
              type="radio"
              value="1"
              onChange={() => setFormData({ ...formData, floor: 1 })}
              id="1"
              name="option3"
            ></input>
            <label for="1">1st</label>
          </div>
          <div className="roomAllot__radio">
            <input
              type="radio"
              value="2"
              onChange={() => setFormData({ ...formData, floor: 2 })}
              id="2"
              name="option3"
            ></input>
            <label for="2">2nd</label>
          </div>
          <div className="roomAllot__radio">
            <input
              type="radio"
              value="3"
              onChange={() => setFormData({ ...formData, floor: 3 })}
              id="3"
              name="option3"
            ></input>
            <label for="3">3rd</label>
          </div>
          <div className="roomAllot__radio">
            <input
              type="radio"
              value="4"
              onChange={() => setFormData({ ...formData, floor: 4 })}
              id="4"
              name="option3"
            ></input>
            <label for="4">4th</label>
          </div>
        </div>
        <button type="submit">Check Rooms</button>
      </form>
    </div>
  );
}

export default RoomAllot;
