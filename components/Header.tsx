"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <header className="py-2 bg-gray-800">
      <div className="container mx-auto flex flex-wrap py-2 px-5 flex-col md:flex-row items-center text-white">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            src="/nextjs-ps.png"
            alt="Next Movies"
            width={65}
            height={65}

          />
          <span className="ml-4 text-2xl">Next Movies</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/theaters" className="mr-8 hover:text-gray-900">
            In Theaters
          </Link>
          <Link href="/popular" className="mr-8 hover:text-gray-900">
            Popular
          </Link>
          <Link href="/upcoming" className="mr-8 hover:text-gray-900">
            Upcoming
          </Link>
          <Link href="/top" className="mr-8 hover:text-gray-900">
            Top Rated
          </Link>
        </nav>
      </div>
    </header>
    // <header className=" bg-gray-800">
    // {
    /* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-start text-white mb-4 md:mb-0"
        >
          <span className="text-xl">Next Movies</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/theaters" className="text-xl font-medium text-white">
            In Theaters
          </Link>
        </nav>
      </div> */
    // }

    // {
    /* <NavigationMenu>
        <NavigationMenuList className="text-xl font-medium text-white">
          <NavigationMenuItem>
            <Link
              href="/theaters"
              legacyBehavior
              passHref
              className="text-xl font-medium text-white"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                In Theaters
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/popular" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Popular
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/upcoming" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Upcoming
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/top" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Top Rated
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */
  )
}

export default Header
