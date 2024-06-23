import { useState } from "react"
import { AreaCode } from "../types/areaCode"
import Item from "./Item"

interface Props {
    items: AreaCode[],
}


const ITelephoneAreaCode = ({ items }: Props) => {
    const [item, setItem] = useState('+84')
    const handleItemClick = (item: string) => {
        let areaCode: string = item.split(' ')[0]
        setItem(areaCode)
    }
    return (
        <>
            {/* Using daisyui dropdown component */}
            <div className="dropdown dropdown-right join-item">
                <div tabIndex={0} role="button" className="btn m-1 bg-white hover:bg-white">{item}</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {items.map((item, index) => (
                        <Item key={index} name={item.country} onClick={() => handleItemClick(item.code)} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ITelephoneAreaCode