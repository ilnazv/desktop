import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppContainer } from './AppContainer';
import { Background } from './Background';
import { BottomPanel } from './BottomPanel';
import { PanelIcon } from './PanelIcon';
const WheelApp = React.lazy(() => import('wheel/App'));

function App() {
    const [app, setApp] = useState('');
    const tdRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (app === 'towerdefense' && tdRef.current?.innerHTML?.length === 0) {
            const TowerDefenseApp = import('towerdefense/App');
            TowerDefenseApp.then((module) => module.default(tdRef.current!));
        }
    }, [app]);

    return (
        <>
            <Background>
                {app === 'wheel' && (
                    <AppContainer onClose={() => setApp('')}>
                        <React.Suspense fallback={<>Loading . . .</>}>
                            <WheelApp />
                        </React.Suspense>
                    </AppContainer>
                )}
                {app === 'towerdefense' && (
                    <AppContainer onClose={() => setApp('')}>
                        <div ref={tdRef} style={{ position: 'relative' }}></div>
                    </AppContainer>
                )}
                <BottomPanel>
                    <PanelIcon onClick={() => setApp('wheel')} />
                    <PanelIcon onClick={() => setApp('towerdefense')} />
                </BottomPanel>
            </Background>
        </>
    );
}

export default App;
