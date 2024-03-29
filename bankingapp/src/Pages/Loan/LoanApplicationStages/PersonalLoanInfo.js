import React from 'react';

function PersonalLoanInfo({ formData, setFormData }) {
  const handlePurposeChange = (event) => {
    setFormData({ ...formData, purpose: event.target.value });
  };

  const handleLoanAmountChange = (event) => {
    setFormData({ ...formData, loanAmount: event.target.value });
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Personal Loan Details</h2>
      <div className="flex flex-col mb-2">
        <label htmlFor="purpose" className="mb-1">
          Purpose:
        </label>
        <input
          type="text"
          id="purpose"
          value={formData.purpose}
          onChange={handlePurposeChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="loanAmount" className="mb-1">
          Loan Amount:
        </label>
        <input
          type="text"
          id="loanAmount"
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Enter loan amount"
          value={formData.loanAmount}
          onChange={handleLoanAmountChange}
        />
      </div>
    </div>
  );
}

export default PersonalLoanInfo;
