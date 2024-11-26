import Link from "next/link";
import Card from "@/Components/Card";


export default function Notification() {
    return <Card>
        <div>Notifications</div> 
       
     <Link className="underline" href={'/complex-dashboard/archived'}>Archived</Link>
        </Card>
}