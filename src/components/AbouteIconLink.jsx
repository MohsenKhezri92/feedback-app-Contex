import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AbouteIconLink() {
    return (
        <div className='about-link'>
            <Link to={{
                pathname: '/about',
            }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    );
}

export default AbouteIconLink
