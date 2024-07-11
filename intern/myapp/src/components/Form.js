
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationalInfo from './EducationalInfo';
import axios from 'axios';

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    maritalStatus: '',
    contactNumber: '',
    emailAddress: '',
    residentialAddress: '',
    permanentAddress: '',

    // Educational Qualifications
    highSchoolName: '',
    highSchoolYear: '',
    highSchoolGrade: '',
    undergraduateName: '',
    undergraduateDegree: '',
    undergraduateMajor: '',
    undergraduateYear: '',
    undergraduateGrade: '',
    postgraduateName: '',
    postgraduateDegree: '',
    postgraduateMajor: '',
    postgraduateYear: '',
    postgraduateGrade: '',
    otherQualifications: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Replace with your actual API endpoint
    axios.post('https://sheet.best/api/sheets/3a5b4085-f729-4600-aa70-9272e6a34874', formData)
      .then(response => {
        console.log('Response:', response);
        // Optionally reset form fields after successful submission
        setFormData({
          fullName: '',
          dateOfBirth: '',
          gender: '',
          nationality: '',
          maritalStatus: '',
          contactNumber: '',
          emailAddress: '',
          residentialAddress: '',
          permanentAddress: ''
        });
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
      });
  };

  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <PersonalInfo formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <EducationalInfo formData={formData} handleChange={handleChange} />
        )}
        {/* Add more steps as needed */}
        
        <div className="button-group">
          {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
          {step < 2 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 2 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
}

export default Form;
