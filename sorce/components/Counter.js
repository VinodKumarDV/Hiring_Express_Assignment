import { useEffect, useRef, useState, useCallback } from 'react'

const Counter = (props) => {
    const [renderedStreamDuration, setRenderedStreamDuration] = useState('00:00:00'),
        streamDuration = useRef(0),
        previousTime = useRef(0),
        requestAnimationFrameId = useRef(null);
        

    const updateTimer = useCallback(() => {
        let now = performance.now();
        let dt = now - previousTime.current;

        if (dt >= 1000) {
            streamDuration.current = streamDuration.current + Math.round(dt / 1000);
            const formattedStreamDuration = new Date(streamDuration.current * 1000)
                .toISOString()
                .substr(11, 8);
            setRenderedStreamDuration(formattedStreamDuration);
            previousTime.current = now;
        }
        requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, []);

    const startTimer = useCallback(() => {
        previousTime.current = performance.now();
        requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, [updateTimer]);

    useEffect(() => {
        if (props.isStartTimer && !props.isStopTimer) {
            startTimer();
        }
        if (props.isStopTimer && !props.isStartTimer) {
            streamDuration.current = 0;
            cancelAnimationFrame(requestAnimationFrameId.current);
            setRenderedStreamDuration('00:00:00');
        }
    }, [props.isStartTimer, props.isStopTimer, startTimer]);

    useEffect(() => {
        props.isStopTimer && props.TimeCount(renderedStreamDuration) 
    }, [props.isStopTimer])

};

export default Counter