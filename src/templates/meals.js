import React from 'react';
import { meals } from '../utils/data'

import { Truck } from 'react-feather';

const Offerings = () => {
    return (
        <section class="section is-storybuilder is-medium">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-12 is-10-fullhd">
                        <div class="columns is-vcentered">
                            <div class="column is-6">
                                <div class="section-header">
                                    <h2 class="title is-2 is-spaced">Home cooked food </h2>
                                    <h3 class="subtitle is-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a eleifend diam. Sed ut nunc tempor, dapibus massa ut.</h3>
                                    <hr class="spacer is-2" />
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="section-media">
                                    <div class="storybuilder">
                                        {meals.map(meal => (
                                            <div class="story-item">
                                                <div class="story-body">
                                                    <div class="story-caption">{meal.quantity}</div>
                                                    <div class="story-subject">{meal.item} </div>
                                                </div>
                                                <div class="story-icon"><Truck /></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;