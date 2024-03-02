"use client";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";

const SearchDialog = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    size='icon'
                    variant='secondary'
                    className='rounded-full'
                >
                    <MagnifyingGlassIcon className='h-5 w-5' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                        Search for users and groups.
                    </DialogDescription>
                </DialogHeader>
                <hr />
                <div className='space-x-2 flex'>
                    <Input type='text' placeholder='Search text' />
                    <div className='flex justify-end'>
                        <Button variant='default' className='space-x-2'>
                            <MagnifyingGlassIcon className='h-5 w-5' />
                            <span className='sr-only'>Search</span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchDialog;
