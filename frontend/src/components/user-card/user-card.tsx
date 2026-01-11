"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/use-logout";

export default function UserCard({ user }: { user: object }) {
  const { logout } = useLogout();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bold">Phạm Văn Bình</span>
              <span className="text-gray-500 text-xs">NV ĐBCL</span>
            </div>
            <Avatar className="size-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Cài đặt</DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              await logout();
            }}
          >
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
