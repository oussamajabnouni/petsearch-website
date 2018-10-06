import React from 'react';
import { offerings } from '../utils/data'

import { Check } from 'react-feather';

const Offerings = () => {
    return (
        <section className='section is-usp has-background is-medium'>
            <div className='container'>
                <div className='content'>
                    <div className='columns'>
                        {offerings.map(item => (
                            <div className='column' key={item.title}>
                                <div className='card is-usp'>
                                    <Check size={60} />
                                    <hr className='spacer is-1' />
                                    <h3 className='title is-4 is-spaced'>{item.title}</h3>
                                    <p className='subtitle is-5'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;