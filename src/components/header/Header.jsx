import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import "./Header.scss"

const navbar = [
    "Shop",
    "Al",
    "Mobail ",
    "TV&Audio",
    "Appliances",
    "Accessorues",
    "SmartThings",
  ];
  const navbar2 = ["Explore", "Support", "For bussines"];
function Header() {
  // const [ isMenuOpen, setIsMenuOpen] = useState(false)

  //   const toggleMenu = () =>{
  //       setIsMenuOpen(!isMenuOpen)
  //   }
  return (
    <div>
        <div className="header">
            <div className="container">
              <nav className="navbar">
                <h2>Samsung</h2>
                <ul className="navbar__collection">
                    {navbar?.map((el, inx) => (
                        <li key={inx} className="navbar__item">
                        <a href="">{el}</a>
                        </li>
                    ))}
                </ul>
                <ul className="navbar__collection2">
                    {navbar2?.map((el, inx) => (
                        <li key={inx} className="navbar__item">
                        <a href="">{el}</a>
                        </li>
                    ))}

                </ul>
                <div className="icon">
                <IoSearchOutline />
                <IoCartOutline />
                <LuUser />
                </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header