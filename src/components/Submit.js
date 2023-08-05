import React from 'react';

const Submit = ({ formData }) => {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="w-full max-w-md border p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Submitted Information:</h2>
        <p>
          <strong>Picture:</strong> {formData.picture ? formData.picture.name : ''}
        </p>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Phone Number:</strong> {formData.phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default Submit;
