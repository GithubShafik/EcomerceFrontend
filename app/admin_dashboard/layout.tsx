import DashboardLayout from "@/layouts/dashboardLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users",
    description: "Users",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}
