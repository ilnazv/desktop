import React, { useState } from 'react';
import { Background } from './Background';
import { BottomPanel } from './BottomPanel';
import { PanelIcon } from './PanelIcon';
const WheelApp = React.lazy(() => import('wheel/App'));

function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Background>
                App:
                <button onClick={() => setShow((cur) => !cur)}>
                    Toggle (loads app)
                </button>
                {show && (
                    <React.Suspense fallback={<>Loading . . .</>}>
                        <WheelApp />
                    </React.Suspense>
                )}
                <BottomPanel>
                    <PanelIcon />
                </BottomPanel>
            </Background>
        </>
    );
}

export default App;
