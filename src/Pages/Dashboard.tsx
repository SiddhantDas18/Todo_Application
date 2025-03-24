import NavBar from "../Components/NavBar"
import Card from "../Components/Cards"

function Dashboard() {


    return (
        <div className='mx-5 my-5'>
            <NavBar />

            <div className="flex flex-row flex-wrap gap-4">
            <Card title="Need to finish Visco" status={true} />
            <Card title="SetUp my new macook" status={true} />
            </div>
            
        </div>
    )
}

export default Dashboard