import React, { PropsWithChildren } from 'react';
import { Colors } from '../constants';

export function Background({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(0deg, #edabc5 0%, #032e52 100%)',
                height: `100vh`,
                width: `100wh`,
            }}
        >
            {children}
        </div>
    );
}
