import Link from "next/link"

interface MenuItemProps{
    texto: string
    icon: any
    url: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    return(
        <li onClick={props.onClick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer
        `}>
            <Link href={props.url} className={`
                flex flex-col justify-center items-center
                h-20 w-20
                dark:text-gray-200
                ${props.className}
            `}>
                {props.icon}
                <span className={`text-xs font-light `}>
                    {props.texto}
                </span>
            </Link>
        </li>
    )
}