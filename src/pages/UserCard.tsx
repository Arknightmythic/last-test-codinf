import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteIcon } from "lucide-react";

function UserCard({ user, deleteUser }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Akun</CardTitle>
        <CardDescription>{user.name}</CardDescription>
        <CardDescription>{user.email}</CardDescription>
        <CardDescription>{user.role}</CardDescription>
        <CardAction>
            <Button variant={"destructive"} className="w-10 md:w-25" onClick={() => deleteUser(user.id)}><DeleteIcon/><span className="hidden md:flex">Hapus</span></Button>
        </CardAction>
         
      </CardHeader>
     
    </Card>
  );
}

export default UserCard;
