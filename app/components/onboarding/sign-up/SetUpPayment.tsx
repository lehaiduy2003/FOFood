const SetUpPayment = () => {
  return (
    <>
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="Owner's Name"
      />
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="Card Number"
      />
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="Expiration Date (MM/YY)"
      />
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="CVV"
      />
      <div className="divider divider-primary">OR</div>
      <label>{"Upload QR code (Optional)"}</label>
      <input
        type="file"
        className="file-input file-input-bordered form-control border-slate-300 file-input-primary w-full max-w-xs bg-slate-100"
      />
    </>
  );
};

export default SetUpPayment;
