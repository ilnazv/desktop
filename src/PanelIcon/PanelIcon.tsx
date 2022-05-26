import React from 'react';

export function PanelIcon({
    ...props
}: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>): JSX.Element {
    return (
        <button
            style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
            }}
            className="pointer"
            {...props}
        >
            <span
                className="material-icons primary"
                style={{
                    verticalAlign: 'middle',
                    lineHeight: 'normal',
                }}
            >
                pie_chart
            </span>
        </button>
    );
}
