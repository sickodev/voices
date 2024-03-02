"use client";
import { cn } from "@/lib/utils";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type BottombarProps = {
    classname?: string;
};

const BottomBar = ({ classname }: BottombarProps) => {
    const path = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(path.split("/")[1]);
    }, [path]);
    return (
        <nav className={cn("", classname)}>
            <div className='flex space-x-3'>
                <Link
                    href={"/home"}
                    className={cn(
                        "p-1 w-1/5 flex justify-center rounded-md",
                        pathName === "home" &&
                            "dark:bg-neutral-800 bg-neutral-200 "
                    )}
                >
                    <HomeIcon className='w-5 h-5' />
                </Link>
                <Link
                    href={"/saved"}
                    className={cn(
                        "p-1 w-1/5 flex justify-center rounded-md",
                        pathName === "saved" &&
                            "dark:bg-neutral-800 bg-neutral-200 "
                    )}
                >
                    <BookmarkIcon className='w-5 h-5' />
                </Link>
                <Link
                    href={"/friends"}
                    className={cn(
                        "p-1 w-1/5 flex justify-center rounded-md",
                        pathName === "friends" &&
                            "dark:bg-neutral-800 bg-neutral-200 "
                    )}
                >
                    <UsersIcon className='w-5 h-5' />
                </Link>
                <Link
                    href={"/groups"}
                    className={cn(
                        "p-1 w-1/5 flex justify-center rounded-md",
                        pathName === "groups" &&
                            "dark:bg-neutral-800 bg-neutral-200 "
                    )}
                >
                    <GlobeAltIcon className='w-5 h-5' />
                </Link>
                <Link
                    href={"/settings"}
                    className={cn(
                        "p-1 w-1/5 flex justify-center rounded-md",
                        pathName === "settings" &&
                            "dark:bg-neutral-800 bg-neutral-200 "
                    )}
                >
                    <GearIcon className='w-5 h-5' />
                </Link>
            </div>
        </nav>
    );
};

export default BottomBar;
