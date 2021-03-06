declare module 'wheel/App' {
    const WheelApp: React.ComponentType;

    export default WheelApp;
}

declare module 'towerdefense/App' {
    const TowerDefenseApp: (el: HTMLElement) => void;

    export default TowerDefenseApp;
}

declare module 'ngsandbox/ngsandbox' {
    const mount: (el: HTMLElement) => void;

    export { mount };
}
