import Link from "next/link";
import Card from "@/Components/Card";
// export const metadata = {
//     title:{
//     absolute: "kldkls"
//     }
// }

export default function ArchivedNotification() {
    return <Card>
        <div>Archived Notifications</div> 
       <h1>Helllo world</h1>
     <Link className="underline" href={'/complex-dashboard'}>Default</Link>
        </Card>
}