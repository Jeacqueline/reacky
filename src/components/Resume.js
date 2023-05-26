import React from 'react';
import resumePDF from '../assets/documents/Jeacqueline_Rios.pdf';

const Resume = () => {
  return (
    <div>
      <embed src={resumePDF} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default Resume;
