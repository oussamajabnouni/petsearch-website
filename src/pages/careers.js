import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'

const Careers = (props) => {
    return (
        <Layout location={props.location}>
            <section class="hero is-danger" style={{ marginTop: 64 }}>
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Careers
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section is-blog">
                <div className="container">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input " type="email" placeholder="Email input" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-text">Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Careers;