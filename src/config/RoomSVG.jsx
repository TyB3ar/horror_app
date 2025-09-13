import { useRef, useEffect, useState } from 'react'; 

export function RoomSVG({ backgroundImage, paths, showFill, onPathClick, onSizeChange, children }) {
    const svgRef = useRef(); // useRef for responsiveness to different screen sizes

    // useEffect to measure change in screen size
    useEffect(() => {
        const updateSize = () => {
            if (svgRef.current) {
                const rect = svgRef.current.getBoundingClientRect(); 
                if (typeof onSizeChange === 'function') {
                    onSizeChange({ width: rect.width, height: rect.height });
                }
            }
        };
        updateSize(); 
        window.addEventListener('resize', updateSize); 
        return () => window.removeEventListener('resize', updateSize);
    }, [onSizeChange]); 

    return (
        <div ref={svgRef} style={{ position: 'relative', width: '100%', height: '100%' }}> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 1343"
            preserveAspectRatio="xMinYMin meet"
            style={{ width: '100%', height: '100%' }}
            onClick={onPathClick}
          >
          {backgroundImage && 
            <image
              href={backgroundImage}
              x="0"
              y="0"
              width="2048"
              height="1343"
              style={{ pointerEvents: "none", cursor: "default" }}
            />
          }
          {Array.isArray(paths) && paths.map((path, index) => (
            <path
              key={index}
              id={path.id}
              className={path.className}
              fill={showFill ? path.fill.slice(0, 7) : path.fill}
              d={path.d}
            >
              <title>{path.id} {path.fill}</title>
            </path>
            ))}
          </svg>
        </div>
    );
};
