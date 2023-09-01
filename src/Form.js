import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cName, setCName] = useState('');
  const [division, setDivision] = useState('');
  const [rollNo, setRollNo] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCName('');
    setDivision('');
    setRollNo('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the backend (PHP)
    const response = await fetch('http://localhost:3001/process-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, cName, division, rollNo }),
    });

    // Assuming the response from PHP includes the certificate URL or data
    const data = await response.json();
    if(data.certificate_url) {
      alert('Sent Successfully!');
      
    }
  };

  return (
    <div className="form-container">
      <div className="logo-container" style={{display:'block'}}>
      <div className="schoolName">
  <div style={{display: 'inline-block', position:'absolute', left: '100px'}}>
  <div id="divLogoImage" style={{display: 'inline', position: 'relative'}}>
    <img src="https://shantiniketan.riteschool.com/RITeSchool/images/Logos/School_Logo.bmp?version=1.2" id="ctl00_imgSchoolLogo" style={{height: '40px', cursor: 'pointer'}} />
  </div>
  </div>
  <div style={{display: 'inline-block', position:'absolute', left: '140px'}}>
  <span style={{display: 'inline-block', height: '40px', verticalAlign: 'calc(-4px)', fontFamily: 'Open Sans'}}>
    SHANTINIKETAN</span> 
  </div>
  
</div>

      </div>
      <img src='/atl.png' style={{ height: '50px' }}/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="number" min={1} max={12} placeholder="Class" value={cName} onChange={(e) => setCName(e.target.value)} />
        <input type="text" placeholder="Division" value={division} onChange={(e) => setDivision(e.target.value)} />
        <input type="number" min={1} max={40} placeholder="Roll no." value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
