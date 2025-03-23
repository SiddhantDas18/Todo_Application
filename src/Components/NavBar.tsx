import { BasicButton } from "./Buttons"

export default function NavBar(){
    return <div>
        <NavSkeleton/>
    </div>
}

function NavSkeleton(){
    return <div className="flex justify-between">
        <div className="text:white text-2xl">
            My Todo
        </div>

        <div>
            <BasicButton varient="Secondary" size='lg' text="Add new todo"/>
        </div>
    </div>
}