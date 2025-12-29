import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex"/>
            <main className="lg:pl-64 h-full pt-12.5 lg:pt-0">
                <div className="bg-red-400 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout;