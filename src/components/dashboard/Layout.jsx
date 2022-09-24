import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import '../../styles/scroll.css';

export const DashboardLayout = ({ children }) => {
    return (
        <BodyWrapper>
            <div className="flex h-screen bg-gray-200">
                <NavSidebar />
                <div className="flex flex-col flex-1 overflow-hidden div-vertical-scroll">
                    <main className="content div-vertical-scroll">
                        <section className="sm:flex-row flex flex-col flex-1">
                            <div className="content-box" style={{ flexGrow: 2, flexBasis: "0%"}} >
                                {children}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </BodyWrapper>
    );
};