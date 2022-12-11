import Link from "next/link"

interface LogoProps{
    url: string
}

export default function Logo(props: LogoProps) {
    return(
        <div className={`f
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20
        `}>
            <li className={`
                flex flex-col items-center justify-center
                h-12 w-12 rounded-full
                bg-white 
            `}>
                <Link href={props.url} className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                `}>
                    <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`}></div>
                    <div className={`flex mt-0.5`}>
                        <div className={`h-3 w-3 rounded-full bg-yellow-500 mr-0.5`}></div>
                        <div className={`h-3 w-3 rounded-full bg-green-600 ml-0.5`}></div>
                    </div> 
                </Link>
            </li>
        </div>
    )
}