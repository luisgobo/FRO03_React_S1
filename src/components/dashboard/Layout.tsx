import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import '../../styles/scroll.css';

type Props = {
    children: JSX.Element|JSX.Element[],
};

export const DashboardLayout = ({ children }: Props) => {
    return (
        <BodyWrapper>
            <div className="flex h-screen bg-gray-200">
                <NavSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="content div-vertical-scroll">
                        <section className="sm:flex-row flex flex-col flex-1">
                            <div className="content-box" style={{ flexGrow: 2, flexBasis: "0%" }} >
                                {children}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </BodyWrapper>
    );
};