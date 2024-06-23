import React from "react"
interface Props {
    id: string,
    action?: string,
    width?: string,
    children?: React.ReactElement
}


const InputForm = ({ id, width = 'w=3/4', action, children }: Props) => {
    return (
        <>
            <form id={id} action={action} className={`flex items-center flex-col shadow-xl ${width} lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-auto py-10 px-5 rounded-md bg-white`}>
                {children && <>{children}</>}
            </form>
        </>
    )
}

export default InputForm