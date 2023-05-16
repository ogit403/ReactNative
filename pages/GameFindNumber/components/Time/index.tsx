import { useEffect, useState } from 'react'

const Time = ({ start, handleTimeOut }: { start: boolean, handleTimeOut: (_value: boolean) => void }) => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (!start) {
            setTime(60);
        }
    }, [start])

    useEffect(() => {
        if (start) {
            if (time === 0) return;
            const timeInterval = setInterval(() => {
                const seconds = time - 1;
                setTime(seconds > 0 ? seconds : 0);
                if (seconds === 0) {
                    clearInterval(timeInterval);
                    handleTimeOut(true);
                }
            }, 1000)

            return () => {
                clearInterval(timeInterval);
            }
        }
    })

    return (
        <>
            {time}
        </>
    )
}

export default Time