import React, { PropsWithChildren, useEffect, useRef } from 'react';

function dragElement(element: HTMLDivElement) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e: MouseEvent) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e: MouseEvent) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + 'px';
        element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

export function AppContainer({
    children,
    onClose,
}: PropsWithChildren<{ onClose: () => void }>): JSX.Element {
    const divElRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dragElement(divElRef.current!);
    }, []);

    return (
        <div
            ref={divElRef}
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '600px',
                height: '800px',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.26) 5px 8px 13px 2px',
                borderRadius: '10px',
                backdropFilter: 'blur(4px)',
            }}
        >
            <CloseButton onClose={onClose} />
            {children}
        </div>
    );
}

function CloseButton({ onClose }: { onClose: () => void }): JSX.Element {
    return (
        <button
            onClick={onClose}
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
            }}
        >
            <span className="material-icons">close</span>
        </button>
    );
}
