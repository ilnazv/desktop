import React, { PropsWithChildren } from 'react';

export function BottomPanel({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translate(-50%, 0px)',
                height: '50px',
                width: '200px',
                borderRadius: '12px',
                background: 'rgb(0 0 0 / 30%)',
            }}
        >
            {children}
        </div>
    );
}
