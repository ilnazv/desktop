import React from 'react';
const WheelApp = React.lazy(() => import('wheel/App'));

function App() {
    return (
        <>
            <React.Suspense fallback={<>Loading . . .</>}>
                <WheelApp />
            </React.Suspense>
        </>
    );
}

export default App;
