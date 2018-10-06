import React from 'react';
import { plans } from '../utils/data'

const Offerings = () => {
    return (
        <section className='section is-usp has-background is-medium'>
            <div className='container'>
                <div className='content'>
                    <div>
                        <h3 className='has-text-weight-semibold is-size-2'>
                            Plans
              </h3>
                    </div>
                    <div className='columns'>
                        {plans.map(plan => (
                            <div key={plan.plan} className='column'>
                                <div className='card is-storyworld'>
                                    <div className='card-body'>
                                        <h4 className='has-text-centered has-text-weight-semibold'>
                                            {plan.plan}
                                        </h4>
                                        <h2 className='is-size-1 has-text-weight-bold has-text-primary has-text-centered'>
                                            ${plan.price}
                                        </h2>
                                        <p className='has-text-weight-semibold'>{plan.description}</p>
                                        <ul>
                                            {plan.items.map(item => (
                                                <li key={item} className='is-size-5'>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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