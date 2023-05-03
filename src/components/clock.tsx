import React from "react";

function TextClock(props: any) {
    const [date, setDate] = React.useState(new Date());

    function tick() {
        setDate(new Date());
    }

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    return (
        <>
            {date.toLocaleString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZoneName: "short",
            })}
        </>
    )
}

export default TextClock