import UserItem from "./UserItem";
import {
  User,
  Inbox,
  CreditCard,
  Bell,
  Settings,
  Cookie,
  MessageSquare,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User />,
        },
        {
          link: "/",
          text: "Inbox",
          icon: <Inbox />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <CreditCard />,
        },
        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <Cookie />,
        },
        {
          link: "/",
          text: "Logs",
          icon: <MessageSquare />,
        },
      ],
    },
  ];
  return (
    <div className="fixed w-[300px] min-w-[300px] border-r min-h-screen p-4 flex flex-col gap-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup heading={menu.group} key={key}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
}

export default Sidebar;
