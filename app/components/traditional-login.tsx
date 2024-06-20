
const TranditionnalLogin = () => {
    return (
        <>
            <input type="text" id="phone-input" className='input input-bordered bog w-full max-w-xs bg-white mb-5' placeholder="Phone number"></input>

            <div className="join">
                <input className="input input-bordered join-item bg-white outline-1" placeholder="OTP" />
                <button className="btn join-item rounded-md bg-blue-500 text-white hover:bg-blue-700 max-w-16">Send OTP</button>
            </div>
        </>
    )
}

export default TranditionnalLogin