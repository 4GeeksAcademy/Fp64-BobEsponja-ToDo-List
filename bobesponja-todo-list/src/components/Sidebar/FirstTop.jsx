import './FirstTop.css'
import {useState} from 'react'


export default function FirstTop() {

    const [searchState, setSearchState] = useState('');

    return (
        <div className='firstTop'>

            {searchState === '' && <span className='Span_Search'>Search Category: </span>} <br/>

            {searchState !== '' && <span className='Span_Categories'>Categories: </span>} <br/>

            <input type="text" placeholder='Search' value={searchState} onChange={(e) => {
                setSearchState(e.target.value);
            }}/>
        </div>

    )
}
