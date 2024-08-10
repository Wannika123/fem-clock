import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';
import arrowIcon from '../assets/desktop/icon-arrow-down.svg';
import './TimeAndPlace.css'
import { useContext } from 'react';
import { TimeAPIContext } from '../context/TimeAPIContext';
import Place from './Place';

type TimeProps = {
    showDetail: boolean
    toggleShowDetail: () => void
    hour: number
    min: number
}

export default function Time({ showDetail, toggleShowDetail, hour, min }: TimeProps) {
    const { data }: any = useContext(TimeAPIContext);

    let src;
    let alt;
    let greeting;

    if (hour >= 5 && hour < 18) {
        if (hour < 12) {
            greeting = 'morning';
        } else {
            greeting = 'afternoon';
        }       
        src = sunIcon;
        alt = 'sun icon';
    } else {
        greeting = 'evening';
        src = moonIcon;
        alt = 'moon icon';
    }

    const formatTime = (time: number) => {
        if (time < 10) {
            return '0' + time.toString();
        }
        return time
    }

    return (
        <div className="Time-container">
            <div>
                <div className='greeting'>
                    <img src={src} alt={alt} />
                    good {greeting}
                </div>
                <div className='time'>{formatTime(hour)}:{formatTime(min)} <span>{data !== null && data.abbreviation}</span></div>
                <Place />
            </div>
            <button className='Time-btn' onClick={toggleShowDetail}>
                {showDetail ? 'LESS' : 'MORE'}
                <div>
                    <img className={showDetail ? 'arrow-up' : 'arrow-down'} src={arrowIcon} alt='arrow icon' />
                </div>
            </button>
        </div>
    )
}