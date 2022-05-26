import React from 'react';

export function PanelIcon(): JSX.Element {
    return (
        <div
            style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
            }}
            className="pointer"
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
        </div>
    );
}
