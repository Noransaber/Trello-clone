import Logo from "@/app/(markting)/_components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSidebar from "./mobile-stidebar";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 shadow-sm border-b w-full h-14 z-50 px-4 flex items-center">
        {/* TODO: Mobile Sidebar */}
        <MobileSidebar />
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <Button
            size="sm"
            variant="primary"
            className="hidden md:block h-auto rounded-sm py-1.5 px-2"
          >
            Create
          </Button>

          <Button
            size="sm"
            variant="primary"
            className="md:hidden h-auto rounded-sm "
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
