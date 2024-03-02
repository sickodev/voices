import React from "react";
import PostDialog from "../dialogs/post-dialog";
import { cn } from "@/lib/utils";
import { Sacramento } from "next/font/google";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import SearchDialog from "../dialogs/search-dailog";

const font = Sacramento({ subsets: ["latin"], weight: ["400"] });

const Topbar = () => {
    return (
        <div className='p-2 flex space-x-2'>
            <div className='hidden md:flex w-1/5 tracking-widest items-center justify-center'>
                <h3 className={cn("text-5xl italic", font.className)}>
                    <span className='bg-blue-500 rounded-full mx-1'>V</span>
                    oices
                </h3>
            </div>
            <div className='p-4 dark:bg-neutral-900 bg-neutral-200 rounded-md w-4/5 md:w-3/5'>
                <PostDialog />
            </div>
            <div className='w-1/5 flex items-center justify-center space-x-2'>
                <ModeToggle />
                <Button
                    className='rounded-full'
                    variant='secondary'
                    size='icon'
                >
                    <PersonIcon className='w-5 h-5' />
                </Button>
                <SearchDialog />
            </div>
        </div>
    );
};

export default Topbar;
