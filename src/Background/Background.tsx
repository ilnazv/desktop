import React, { PropsWithChildren } from 'react';
import { Colors } from '../constants';

export function Background({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <div
            style={{
                backgroundImage: 'url(https://i.redd.it/ozu901un81191.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: `100vh`,
                width: `100wh`,
            }}
        >
            {children}
        </div>
    );
}
