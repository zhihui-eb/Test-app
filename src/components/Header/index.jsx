import {React} from 'react';
import HeaderBg from '@/assets/south-bank-london.webp'

import './mix.scss'

const Header = () => {


    return <>
    <div className='header-wrapper'>
        <div className='header-background'>
            <img src={HeaderBg} alt='HeaderBg' />
        </div>
        <div  className='header-title'>
        <span className='title'>THIS IS A TEST PAGE HEADING</span>
        </div>
        
    </div>
    </>;
}


export default Header;