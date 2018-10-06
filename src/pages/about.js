import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { team } from '../utils/data'

const About = (props) => {
    return (
        <Layout location={props.location}>
            <section class="section is-team has-background is-medium" style={{ marginTop: 64 }} >
                <div class="container">
                    <div class="section-header has-text-centered">
                        <h1 class="title is-1 is-spaced"> We are makers and doers </h1>
                        <h2 class="subtitle is-5"> We are a small core team and we all share the passion for pets.</h2> </div>
                    <div class="section-body has-text-centered">
                        <div class="columns is-centered">
                            <div class="column is-12 is-10-fullhd">
                                <div class="columns">
                                    {team.map((member) => (
                                        <div class="column is-3">
                                            <div class="card is-team">
                                                <div class="card-header">
                                                    <div class="card-image"> <img src={member.cover} /> </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="card-title is-size-5 has-text-weight-bold">{member.name}</div>
                                                    <div class="card-subtitle">{member.position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default About;