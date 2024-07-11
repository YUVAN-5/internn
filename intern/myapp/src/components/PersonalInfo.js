import React from 'react';

function PersonalInfo({ formData, handleChange })


{
  return (
    <div>
      <h2>Personal Information</h2>
      <div className="form-group">
        
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="First Name, Middle Name, Last Name"
        />
      </div>
      <div className="form-group">
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Nationality:</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Marital Status:</label>
        <input
          type="text"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Residential Address:</label>
        <input
          type="text"
          name="residentialAddress"
          value={formData.residentialAddress}
          onChange={handleChange}
          placeholder="Street, City, State, Zip Code, Country"
        />
      </div>
      <div className="form-group">
        <label>Permanent Address:</label>
        <input
          type="text"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          placeholder="Street, City, State, Zip Code, Country"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
