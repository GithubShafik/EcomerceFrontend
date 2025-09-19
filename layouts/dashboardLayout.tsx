"use client"

import React, { useContext } from "react";
import AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/sidebar";
import { AuthGuard } from "@/guard";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/breadcrumb";
import { GlobeIcon } from "lucide-react"; // or your preferred icon library
import { useLanguage } from "@/service/translation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname()
  const { lang, setLang, getTranslation } = useLanguage();

  return (
    <AuthGuard>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="w-full">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {/* <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        ShopMart
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {pathname?.replace(/\//g, " ").replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (L) => L.toUpperCase())}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <Select
                value={lang}
                onValueChange={(value) => {
                  setLang(value);
                  localStorage.setItem("lang", value);
                }}
              >
                <SelectTrigger className="w-32 flex items-center gap-2">
                  <GlobeIcon className="h-4 w-4 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </header> */}
            {children}
          </SidebarInset>
        </SidebarProvider>
      </div>
    </AuthGuard>
  );
};

export default DashboardLayout;
