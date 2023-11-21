import Link from "next/link";

export default function NavBar() {

    const liStyle = "hover:border-orange-400 hover:border-solid hover:border px-2 py-2 rounded-xl text-lg"

    return(
        <div className="bg-black w-full h-20 text-orange-400 flex items-center justify-center">
            <nav className="flex gap-x-96 ">
                <Link href="/">"TANGERINE LOGO"</Link>
                <ul className="flex gap-28">
                    <li><Link className={liStyle} href='/recordedDays'>Recorded Days</Link></li>
                    <li><Link className={liStyle} href='/myMemories'>My Memories</Link></li>
                    <li><Link className={liStyle} href='/myAccount'>My Account</Link></li>
                </ul>
            </nav>
        </div>
    )
}