
const SignUp = () => {
    return (
        <>
            <input type="text" placeholder="restaurant name" />
            <input type="text" placeholder="restaurant address" />
            <label>Upload your certificate</label>
            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        </>
    )
}

export default SignUp