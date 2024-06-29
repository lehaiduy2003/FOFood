const SignUp = () => {
  return (
    <>
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="restaurant name"
      />
      <input
        type="text"
        className="w-full bg-slate-100 mb-2 border-slate-300 border-2 border-solid"
        placeholder="restaurant address"
      />
      <div className="divider divider-primary"></div>
      <label>Upload your certificate</label>
      <input
        type="file"
        className="file-input file-input-bordered form-control border-slate-300 file-input-primary w-full max-w-xs bg-slate-100"
      />
    </>
  );
};

export default SignUp;
