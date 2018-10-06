import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'

const Blog = (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const coverStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1518914781460-a3ada465edec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ef5d25894ba45b504a8335e1faf50ca&auto=format&fit=crop&w=1050&q=80')"
    }
    return (
        <Layout location={props.location}>
            <section className="hero is-danger" style={{ marginTop: 64 }}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Blog
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section is-blog">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-10-fullhd is-12">
                            <div className="section-header">
                                <div className="header is-spaced">
                                    <h1 className="title is-4">Latest articles</h1> </div>
                            </div>
                            <div className="section-body">
                                <div className="articles">
                                    <div className="columns has-equal-heights">
                                        {posts.map(({ node }) => {
                                            const title = get(node, 'frontmatter.title') || node.fields.slug
                                            return (
                                                <div className="column">
                                                    <div className="article-item is-large">
                                                        <Link className="article-cover" to={node.fields.slug}>
                                                            <div className="article-image" style={coverStyle} ></div>
                                                        </Link>
                                                        <div className="article-content">
                                                            <h2><Link className="article-cover" to={node.fields.slug}>{title}</Link></h2>
                                                            <p className="article-meta"> <span>{node.frontmatter.date}</span> </p>
                                                            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`