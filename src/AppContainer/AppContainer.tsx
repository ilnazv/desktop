import React, { PropsWithChildren } from 'react';

export function AppContainer({
    children,
    onClose,
}: PropsWithChildren<{ onClose: () => void }>): JSX.Element {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '600px',
                height: '800px',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                background: '#f0f8ff80',
                border: '5px solid #485866',
                borderRadius: '10px',
            }}
        >
            <CloseButton onClose={onClose} />
            {children}
        </div>
    );
}

function CloseButton({ onClose }: { onClose: () => void }): JSX.Element {
    return (
        <button
            onClick={onClose}
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
            }}
        >
            <span className="material-icons">close</span>
        </button>
    );
}
