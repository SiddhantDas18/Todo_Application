import { BasicButton } from "./Buttons"
import { useState } from "react"


interface cardItems{
    title:string,
    description?:string,
    status:boolean,
}

export default function Card(props:cardItems){
    const [status, setStatus] = useState(props.status)
    const basicStyles=" rounded-md border border-grey-600 w-fit py-2 px-2 shadow-md hover:shadow-lg transition-shadow"

    const handleStatusChange = () => {
        setStatus(!status)
        //Need to add api call here
    }

    return <div className={`${basicStyles}`}>
        {props.title}
        {props.description}
        <BasicButton 
            varient={status ? "Primary" : "Secondary"} 
            size='sm' 
            text={status ? 'Add' : 'Done'} 
            onClick={handleStatusChange}
        />
    </div>
}