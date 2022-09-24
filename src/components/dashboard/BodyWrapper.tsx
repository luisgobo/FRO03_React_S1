import React from 'react';

type Props = {
    children: JSX.Element|JSX.Element[],
};

const BodyWrapper = ({ children }: Props) => {
    return (
        <div className="relative min-h-screen">
            <main className="w-full min-h-screen">{children}</main>
        </div>
    );
};

export default BodyWrapper;
