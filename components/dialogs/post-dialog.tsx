import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
    PauseIcon,
    PlayIcon,
    StopIcon,
    TrashIcon,
} from "@radix-ui/react-icons";
import { MicrophoneIcon } from "@heroicons/react/24/outline";

const PostDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex items-center space-x-4 justify-between px-2'>
                    <div className='flex items-center space-x-4'>
                        <div className='h-6 w-6 rounded-full bg-green-500 animate-pulse' />
                        <p className='opacity-50 font-light'>
                            Hey! Speak your mind here.
                        </p>
                    </div>
                    <Button variant='action' size='icon'>
                        <MicrophoneIcon className='h-5 w-5' />
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Post a voice</DialogTitle>
                    <DialogDescription>
                        Record your thoughts and share it with the world.
                    </DialogDescription>
                </DialogHeader>
                <hr />
                <div className='space-y-2'>
                    <div className='p-2 dark:bg-neutral-900 bg-neutral-200 rounded-md flex space-x-4'>
                        <Button variant='action' size='icon'>
                            {/* Perform recording logic. Change Icon to Stop if recording */}
                            <MicrophoneIcon className='h-5 w-5' />
                            <span className='sr-only'>Record</span>
                        </Button>
                        <div className='flex space-x-3 items-center mx-2'>
                            {Array.from({ length: 15 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className='h-2 w-4 rounded-lg p-1 dark:bg-neutral-200 bg-neutral-700'
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className='flex space-x-4 justify-center items-center py-2'>
                        <Button
                            size='icon'
                            className='rounded-full'
                            variant='secondary'
                        >
                            <PlayIcon className='w-5 h-5' />
                            <span className='sr-only'>Play</span>
                        </Button>
                        <Button
                            size='icon'
                            className='rounded-full'
                            variant='secondary'
                        >
                            <PauseIcon className='w-5 h-5' />

                            <span className='sr-only'>Pause</span>
                        </Button>
                        <Button
                            size='icon'
                            className='rounded-full'
                            variant='secondary'
                        >
                            <StopIcon className='w-5 h-5' />

                            <span className='sr-only'>Stop</span>
                        </Button>
                        <Button
                            size='icon'
                            className='rounded-full'
                            variant='destructive'
                        >
                            <TrashIcon className='w-5 h-5' />
                            <span className='sr-only'>Delete</span>
                        </Button>
                    </div>
                    <div className='flex space-x-2 justify-end my-2 pt-2'>
                        <Button variant='secondary' className='rounded-full'>
                            {/* Cron Jobs */}
                            <p>Schedule</p>
                        </Button>
                        <Button variant='action'>
                            <p>Post</p>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PostDialog;
