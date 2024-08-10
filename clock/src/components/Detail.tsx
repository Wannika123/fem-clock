import React, { useContext } from 'react'
import { TimeAPIContext } from '../context/TimeAPIContext'
import './Detail.css'

function Detail() {

    const { data, loading }: any = useContext(TimeAPIContext)

    return (
        <div className="Detail-container">
            <div className="sub-detail-container">
                <div className="detail-topic">current timezone</div>
                {loading && <p className='loading'>loading</p>}
                {data !== null && <div className="detail-value">{data.timezone}</div>}
            </div>
            <div className="sub-detail-container">
                <div className="detail-topic">day of the week</div>
                {loading && <p className='loading'>loading</p>}
                {data !== null && <div className="detail-value">{data.day_of_week}</div>}
            </div>
            <div className="sub-detail-container">
                <div className="detail-topic">day of the year</div>
                {loading && <p className='loading'>loading</p>}
                {data !== null && <div className="detail-value">{data.day_of_year}</div>}
            </div>
            <div className="sub-detail-container">
                <div className="detail-topic">week number</div>
                {loading && <p className='loading'>loading</p>}
                {data !== null && <div className="detail-value">{data.week_number}</div>}
            </div>
        </div>
    )
}

export default React.memo(Detail);