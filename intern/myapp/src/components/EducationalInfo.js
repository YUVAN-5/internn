import React from 'react';

function EducationalInfo({ formData, handleChange }) {

  
  return (
    <div>
      <h2>Educational Qualifications</h2>
      <div className="form-group">
        <label><h4>1.High School Details:</h4></label>
        <div>
          <label>School Name:</label>
          <input
            type="text"
            name="highSchoolName"
            value={formData.highSchoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year of Passing:</label>
          <input
            type="number"
            name="highSchoolYear"
            value={formData.highSchoolYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Percentage/Grade:</label>
          <input
            type="text"
            name="highSchoolGrade"
            value={formData.highSchoolGrade}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label><h4>2.Undergraduate Details:</h4></label>
        <div>
          <label>College/University Name:</label>
          <input
            type="text"
            name="undergraduateName"
            value={formData.undergraduateName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            name="undergraduateDegree"
            value={formData.undergraduateDegree}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Major:</label>
          <input
            type="text"
            name="undergraduateMajor"
            value={formData.undergraduateMajor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year of Passing:</label>
          <input
            type="number"
            name="undergraduateYear"
            value={formData.undergraduateYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Percentage/Grade:</label>
          <input
            type="text"
            name="undergraduateGrade"
            value={formData.undergraduateGrade}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label><h4>3.Postgraduate Details:</h4></label>
        <div>
          <label>College/University Name:</label>
          <input
            type="text"
            name="postgraduateName"
            value={formData.postgraduateName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            name="postgraduateDegree"
            value={formData.postgraduateDegree}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Major:</label>
          <input
            type="text"
            name="postgraduateMajor"
            value={formData.postgraduateMajor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year of Passing:</label>
          <input
            type="number"
            name="postgraduateYear"
            value={formData.postgraduateYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Percentage/Grade:</label>
          <input
            type="text"
            name="postgraduateGrade"
            value={formData.postgraduateGrade}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Other Qualifications:</label>
        <input
          type="text"
          name="otherQualifications"
          value={formData.otherQualifications}
          onChange={handleChange}
          placeholder="Diplomas, Certifications, etc."
        />
      </div>
    </div>
  );
}

export default EducationalInfo;
