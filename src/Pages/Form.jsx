import React, { useState } from 'react';
import './Style2.css'; 

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    remain: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'field is required';
    }

    if (!formData.remain) {
      newErrors.remain = 'field  is required';
    }

    if (!formData.message) {
      newErrors.message = 'field  is required';
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="formf">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="remain"
            placeholder="Remain"
            value={formData.remain}
            onChange={handleChange}
          />
          {errors.remain && <span className="error">{errors.remain}</span>}
        </div>
        <div className="form-group">
          <input
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
