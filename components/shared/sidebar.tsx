"use client";
import { cn } from "@/lib/utils";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { Sacramento } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type SidebarProps = {
    classname?: string;
};

const Sidebar = ({ classname }: SidebarProps) => {
    const path = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(path.split("/")[1]);
    }, [path]);
    return (
        <nav
            className={cn(
                classname,
                "filter shadow-md h-[85vh] justify-between"
            )}
        >
            <ul className='p-2 space-y-4 mt-6'>
                <li
                    className={cn(
                        "hover:dark:bg-neutral-900 hover:bg-neutral-300 mx-2 px-2 py-1 rounded-md transition duration-150 ease-out",
                        pathName === "home" &&
                            "dark:bg-neutral-800 bg-neutral-200"
                    )}
                >
                    <Link
                        href={"/home"}
                        className='flex items-center space-x-8'
                    >
                        <HomeIcon className='h-5 w-5' />
                        <h5 className='text-lg'>home</h5>
                    </Link>
                </li>
                <li
                    className={cn(
                        "hover:dark:bg-neutral-900 hover:bg-neutral-300 mx-2 px-2 py-1 rounded-md transition duration-150 ease-out",
                        pathName === "saved" &&
                            "dark:bg-neutral-800 bg-neutral-200"
                    )}
                >
                    <Link
                        href={"/saved"}
                        className='flex items-center space-x-8'
                    >
                        <BookmarkIcon className='h-5 w-5' />
                        <h5 className='text-lg'>saved</h5>
                    </Link>
                </li>
                <li
                    className={cn(
                        "hover:dark:bg-neutral-900 hover:bg-neutral-300 mx-2 px-2 py-1 rounded-md transition duration-150 ease-out",
                        pathName === "friends" &&
                            "dark:bg-neutral-800 bg-neutral-200"
                    )}
                >
                    <Link
                        href={"/friends"}
                        className='flex items-center space-x-8'
                    >
                        <UsersIcon className='h-5 w-5' />
                        <h5 className='text-lg'>friends</h5>
                    </Link>
                </li>
                <li
                    className={cn(
                        "hover:dark:bg-neutral-900 hover:bg-neutral-300 mx-2 px-2 py-1 rounded-md transition duration-150 ease-out",
                        pathName === "groups" &&
                            "dark:bg-neutral-800 bg-neutral-200"
                    )}
                >
                    <Link
                        href={"/groups"}
                        className='flex items-center space-x-8'
                    >
                        <GlobeAltIcon className='h-5 w-5' />
                        <h5 className='text-lg'>groups</h5>
                    </Link>
                </li>
                <li
                    className={cn(
                        "hover:dark:bg-neutral-900 hover:bg-neutral-300 mx-2 px-2 py-1 rounded-md transition duration-150 ease-out",
                        pathName === "settings" &&
                            "dark:bg-neutral-800 bg-neutral-200"
                    )}
                >
                    <Link
                        href={"/settings"}
                        className='flex items-center space-x-8'
                    >
                        <GearIcon className='h-5 w-5' />
                        <h5 className='text-lg'>settings</h5>
                    </Link>
                </li>
            </ul>
            <div className='p-1 rounded-md text-center border border-neutral-600 hover:dark:bg-neutral-900 hover:bg-neutral-300 transition duration-150 ease-out'>
                <p>Sign Out</p>
            </div>
        </nav>
    );
};

export default Sidebar;
