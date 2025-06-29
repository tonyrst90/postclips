import { useEffect, useState } from 'react';
import { Badge } from 'reactstrap';

const ClockBox = () => {
    const [currentTime, setCurrentTime] = useState<string>('');
    useEffect(() => {
        const getCurrentTime12Hours = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            let twelveHourFormat = hours % 12;
            twelveHourFormat = twelveHourFormat ? twelveHourFormat : 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const currentTime12Hours = `${twelveHourFormat}:${formattedMinutes} ${ampm}`;
            setCurrentTime(currentTime12Hours);
        };
        getCurrentTime12Hours();
        const interval = setInterval(getCurrentTime12Hours, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div className="clockbox">
                <svg id="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                    <g id="face">
                        <circle className="circle" cx="300" cy="300" r="253.9"></circle>
                        <path className="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"></path>
                        <circle className="mid-circle" cx="300" cy="300" r="16.2"></circle>
                    </g>
                    <g id="hour">
                        <path className="hour-hand" d="M300.5 298V142"></path>
                        <circle className="sizing-box" cx="300" cy="300" r="253.9"></circle>
                    </g>
                    <g id="minute">
                        <path className="minute-hand" d="M300.5 298V67">   </path>
                        <circle className="sizing-box" cx="300" cy="300" r="253.9"></circle>
                    </g>
                    <g id="second">
                        <path className="second-hand" d="M300.5 350V55"></path>
                        <circle className="sizing-box" cx="300" cy="300" r="253.9">   </circle>
                    </g>
                </svg>
                <Badge color='transparent' className="f-10 p-0" id="txt">{currentTime}</Badge>
            </div>
        </div>
    )
}
export default ClockBox