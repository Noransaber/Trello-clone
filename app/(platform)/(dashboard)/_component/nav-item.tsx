"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

interface NavItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization; // Use the correct type
  onExpand: (id: string) => void;
}

const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },

    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },

    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },

    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <div>
      <AccordionItem value={organization.id} className="border-none">
        <AccordionTrigger
          onClick={() => onExpand(organization.id)}
          className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
            isActive && !isExpanded && "bg-shy-500/10 text-sky-700"
          )}
        >
          <div className="flex items-center gap-x-2">
            <div className="w-7 h-7 relative">
              <Image
                fill
                src={organization.imageUrl}
                alt="Organization"
                className="rounded-sm object-cover"
              />
            </div>
            <span className="font-medium tex-sm">{organization.name}</span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="pt-1 text-neutral-700">
          {routes.map((route) => (
            <Button
              key={route.href}
              size="sm"
              variant="ghost"
              className={cn(
                "w-full pl-10 mb-1  justify-start text-sm font-normal",
                pathname === route.href && "bg-shy-500/10 text-sky-700"
              )}
              onClick={() => onClick(route.href)}
            >
              {route.icon}
              {route.label}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export default NavItem;
