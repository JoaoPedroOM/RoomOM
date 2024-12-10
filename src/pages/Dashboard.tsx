import React, { useState } from "react";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/Sidebar";

import { MdDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BsCameraVideo } from "react-icons/bs";

const Logo = React.memo(() => (
  <div className="text-left py-4 flex items-center">
    <h2 className="text-xl font-bold text-white font-main">RoomOM</h2>
  </div>
));

const LogoIcon = React.memo(() => (
  <div className="text-center py-4">
    <h2 className="text-xl font-bold text-white font-main">R</h2>
  </div>
));

const Dashboard = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <MdDashboard size={25} color="white" />,
    },
    {
      label: "Gravações",
      href: "/gravacoes",
      icon: <BsCameraVideo size={25} color="white" />,
    },
    {
      label: "Sala personalizada",
      href: "/sala",
      icon: <FaPlus size={25} color="white" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className="lg:flex lg:flex-row flex flex-col h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between lg:gap-10 gap-2">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="lg:mt-8 mt-2 flex flex-col gap-2 font-semibold font-second">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold text-gray-400">
            <SignedIn>
              <UserButton />
            </SignedIn>
            {open && user?.firstName && (
              <span className="text-white font-second">{user.firstName}</span>
            )}
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 p-4 text-white">
        Dados aqui
      </main>
    </div>
  );
};

export default Dashboard;
