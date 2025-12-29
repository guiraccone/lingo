import {
    Sheet, SheetContent, SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <DialogTitle>
                <SheetContent side="left">
                    <Sidebar />
                </SheetContent>
            </DialogTitle>
        </Sheet>
    )
}