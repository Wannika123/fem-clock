import { useFetch } from '../hooks/useFetch'
import refreshIcon from '../assets/desktop/icon-refresh.svg'
import './Quote.css'
import { useState } from 'react'

const QUOTE_URL = "https://api.quotable.io/quotes/random"

function Quote() {
    const [count, setCount] = useState(0);

    const { data, loading, error }: any = useFetch(QUOTE_URL, count);
    
    return (
        <div className='Quote-container'>
            <div className='text-container'>
                { loading && <p className='loading'>Loading</p>}
                { error !== '' && <p>{error}</p>}
                { data !== null && (
                    <>
                        <p>{data[0].content}</p>
                        <div>{data[0].author}</div>
                    </>  
                )}
            </div>
            <button className='Quote-btn' onClick={() => setCount(count => count + 1)}>
                <img src={refreshIcon} alt='refresh icon' />
            </button>
        </div>
    )   
}

export default Quote;