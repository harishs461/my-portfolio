import { IoHome } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export default function Sidebar() {
    return(
        <>
        <ul className="flex flex-col gap-y-5 p-5">
          <li>
            <a href="/" className="flex items-center gap-x-3"><IoHome/>Home</a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-x-3"><FaInfo/>About</a>
          </li>
          <li>
            <a href="/contact" className="flex items-center gap-x-3"><IoMdContact/>Contact</a>
          </li>
        </ul>
      </>
    )
}