import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Colors } from '../constants';

const imgUrl = 'https://i.redd.it/ozu901un81191.jpg';

export function Background({ children }: PropsWithChildren<{}>): JSX.Element {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = imgUrl;
        image.onload = (ev) => {
            setLoading(false);
        };
    }, []);

    return loading ? (
        <div className="root">
            <div className="container">
                <div className="loader"></div>
            </div>
        </div>
    ) : (
        <div
            style={{
                background: `url("${imgUrl}") center center / cover no-repeat gray`,
                height: `100vh`,
                width: `100wh`,
            }}
        >
            {children}
        </div>
    );
}
