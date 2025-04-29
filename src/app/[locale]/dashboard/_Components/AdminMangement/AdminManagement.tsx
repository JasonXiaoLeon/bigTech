import { getUsersWithPermissionLevel } from "@/service/userService";
import AdminUserTable from "./AdminUserTable/AdminUserTable";
import { auth } from "@/lib/auth";

export default async function AdminManagement() {
  const users = await getUsersWithPermissionLevel();
  const session = await auth()
  const email = session?.user?.email || '' 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Management</h1>
      <div className="overflow-x-auto">
        <AdminUserTable users={users} email={email} />
      </div>
    </div>
  );
}
