import React, { PropsWithChildren } from 'react';

export function AppContainer({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '600px',
                height: '1000px',
                transform: 'translate(-50%, -50%)',
            }}
        >
            {children}
        </div>
    );
}
