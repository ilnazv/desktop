import React, { useState } from 'react';
import { AppContainer } from './AppContainer';
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
                {show && (
                    <AppContainer>
                        <React.Suspense fallback={<>Loading . . .</>}>
                            <WheelApp />
                        </React.Suspense>
                    </AppContainer>
                )}
                <BottomPanel>
                    <PanelIcon onClick={() => setShow((cur) => !cur)} />
                </BottomPanel>
            </Background>
        </>
    );
}

export default App;
