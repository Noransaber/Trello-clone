"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebarStore } from "@/hooks/user-mobile-sidebar";

function MobileSidebar() {
  const pathname = usePathname();
  const isOpen = useMobileSidebarStore((state) => state.isOpen);
  const onClose = useMobileSidebarStore((state) => state.onClose);
  const onOpen = useMobileSidebarStore((state) => state.onOpen);
  const [isMounted, setIsMounted] = useState(false);

  // if the pathname changes, we close the sidebar
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  // To prevent hydration errors, we are using a state to check if the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileSidebar;
