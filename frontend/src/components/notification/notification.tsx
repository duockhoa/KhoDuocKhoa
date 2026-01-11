import { BellIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export default function Notification({ content }: { content: [] }) {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="relative">
          <BellIcon size={22} />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs rounded-full"
          >
            1
          </Badge>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Badge variant="destructive"> Notification </Badge>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
