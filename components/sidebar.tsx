import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "./sidebar-item"
import { ClerkLoading, ClerkLoaded, UserButton, ClerkProvider } from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-3xs lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>
            <Link href={"/learn"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.png" alt="mascot" height={40} width={40} />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem href="/learn" label="learn" iconSrc="/learn.png" />
                <SidebarItem href="/leaderboard" label="leaderboard" iconSrc="/leaderboard.png" />
                <SidebarItem href="/shop" label="shop" iconSrc="/shop.png" />
                <SidebarItem href="/quests" label="quests" iconSrc="/quests.png" />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
    )
}