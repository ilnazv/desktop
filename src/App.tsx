import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { AppContainer } from './AppContainer';
import { Background } from './Background';
import { BottomPanel } from './BottomPanel';
import { PanelIcon } from './PanelIcon';
const WheelApp = React.lazy(() => import('wheel/App'));

function App() {
    const [app, setApp] = useState('');
    const tdRef = useRef<HTMLDivElement>(null);
    const ngsandboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (app === 'towerdefense' && tdRef.current?.innerHTML?.length === 0) {
            const TowerDefenseApp = import('towerdefense/App');
            TowerDefenseApp.then((module) => module.default(tdRef.current!));
        }
        if (
            app === 'ngsandbox' &&
            ngsandboxRef.current?.innerHTML?.length === 0
        ) {
            const ngsandboxModule = import('ngsandbox/ngsandbox');
            ngsandboxModule.then((module) =>
                module.mount(ngsandboxRef.current!)
            );
        }
    }, [app]);

    const onClose = useCallback(() => setApp(''), []);

    return (
        <>
            <Background>
                {app === 'wheel' && (
                    <AppContainer onClose={onClose}>
                        <React.Suspense fallback={<>Loading . . .</>}>
                            <WheelApp />
                        </React.Suspense>
                    </AppContainer>
                )}
                {app === 'towerdefense' && (
                    <AppContainer onClose={onClose}>
                        <div ref={tdRef} style={{ position: 'relative' }}></div>
                    </AppContainer>
                )}
                {app === 'ngsandbox' && (
                    <AppContainer onClose={onClose}>
                        <div
                            ref={ngsandboxRef}
                            style={{ position: 'relative' }}
                        ></div>
                    </AppContainer>
                )}
                <BottomPanel>
                    <PanelIcon onClick={() => setApp('wheel')} />
                    <PanelIcon onClick={() => setApp('towerdefense')} />
                    <PanelIcon onClick={() => setApp('ngsandbox')} />
                </BottomPanel>
            </Background>
        </>
    );
}

export default App;
