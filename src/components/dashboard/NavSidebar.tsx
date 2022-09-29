/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <React.Fragment>
            {/* Sidebar Overlay */}
            <div
                onClick={() => {
                        setIsSidebarOpen(false)                                                
                    }
                }
                className={ 
                    `fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`                    
                }
            />

            <div>
                <button
                    className="btn-menu"
                    onClick={ (): void => {
                            setIsSidebarOpen(true)                            
                        } 
                    }
                    type="button"
                >
                    <Icon name="burger" className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                    }`}
            >
                {/* <div className="flex items-center justify-center mt-10 text-center py-6">
                    <span className="mx-2 text-2xl font-semibold text-black">
                        react-minimal-side-navigation
                    </span>
                </div> */}

                {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: "Inicio",
                            itemId: "/HomePage",                            
                            elemBefore: () => <Icon name="check-circle" />
                        },
                        // {
                        //     title: "Tarea 01- Funciones",
                        //     itemId: "/Tarea01",                            
                        //     elemBefore: () => <Icon name="check-circle" />
                        // },                        
                        {
                            title: "Tarea 1",
                            itemId: "",
                            elemBefore: () => <Icon name="check-circle" />,
                            subNav: [
                                {
                                    title: "Con clases",
                                    itemId: "/Tarea01/clases",
                                    elemBefore: () => <Icon name="check-square" />
                                },
                                {
                                    title: "Con Funciones",
                                    itemId: "/Tarea01/funciones",
                                    // Optional
                                    elemBefore: () => <Icon name="check-square" />
                                },                                
                            ]
                        },
                        {
                            title: "Tarea 2",
                            itemId: "/Tarea02",
                            elemBefore: () => <Icon name="check-circle" />,                            
                        },                     
                    ]}
                />

                <div className="absolute bottom-0 w-full my-8">
                    <Navigation
                        activeItemId={location.pathname}
                        items={[
                            {
                                title: "Settings",
                                itemId: "/Settings",
                                elemBefore: () => <Icon name="activity" />
                            }
                        ]}
                        onSelect={({ itemId }) => {
                            navigate(itemId);
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};
