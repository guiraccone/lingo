"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Props (abreviação de "properties") são os dados que um componente React recebe do componente pai.
// Elas permitem configurar e reutilizar o mesmo componente de diferentes formas,
// tanto na mesma página quanto em páginas diferentes.
// Quando tipadas com TypeScript, tornam o código mais seguro, garantindo que todas as props
// obrigatórias sejam passadas com os tipos corretos.

type Props = {
    label: string;
    iconSrc: string;
    href: string;
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {

    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-13"
            asChild
        >
            <Link href={href}>
                <Image 
                    src={iconSrc}
                    alt={label}
                    className="mr-5"
                    height={32}
                    width={32}
                />
                {label}
            </Link>
        </Button>
    )
}