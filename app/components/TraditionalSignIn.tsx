import { AreaCode } from "../types/areaCode"
import ITelephoneAreaCode from "./ITeleAreaCode"

interface Props {
    areaCodes: AreaCode[]
}
const TranditionnalSignIn = ({ areaCodes }: Props) => {
    return (
        <>
            <div className="join mb-2">
                <input type="text" id="phone-input" className='input input-bordered join-item bg-white outline-1 w-full' placeholder="Phone number" />
                <ITelephoneAreaCode items={areaCodes} />
            </div>
            <div className="join">
                <input type="text" id="otp-input" className="input input-bordered join-item bg-white outline-1" placeholder="OTP" />
                <button className="btn join-item rounded-md bg-blue-500 text-white hover:bg-blue-700 max-w-16">Send OTP</button>
            </div>
        </>
    )
}

export default TranditionnalSignIn