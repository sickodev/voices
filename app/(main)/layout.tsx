import BottomBar from "@/components/shared/bottombar";
import Sidebar from "@/components/shared/sidebar";
import Topbar from "@/components/shared/topbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=''>
            <div className='flex-col flex justify-between h-[92vh]'>
                <div>
                    <Topbar />
                    <div className='flex space-x-2 mx-2'>
                        <Sidebar classname='md:flex flex-col hidden w-1/6 border p-1 rounded-md' />
                        <div className='md:w-5/6 w-full border p-1 rounded-md'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BottomBar classname='md:hidden mr-2 ml-3 p-1 border filter shadow-md my-1 rounded-md' />
            </div>
        </main>
    );
};

export default MainLayout;
