import React, { useState } from 'react';
const WheelApp = React.lazy(() => import('wheel/App'));

function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            App:
            <button onClick={() => setShow((cur) => !cur)}>
                Toggle (loads app)
            </button>
            {show && (
                <React.Suspense fallback={<>Loading . . .</>}>
                    <WheelApp />
                </React.Suspense>
            )}
        </>
    );
}

export default App;
