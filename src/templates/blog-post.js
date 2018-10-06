import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Home } from 'react-feather'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const { pathname } = this.props.location;
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <main className="app-content">
          <article className="article">
            <div className="article-header" style={{ marginTop: 64 }}>
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-7-fullhd is-9-widescreen is-10-tablet">
                    <nav className="breadcrumb is-medium">
                      <ul>
                        <li> <a href="/blog"><Home style={{ marginRight: 10 }} /><span>Blog</span></a> </li>
                        <li className="is-active"> <a href="#"><span>{pathname.substr(1)}</span></a> </li>
                      </ul>
                    </nav>
                    <div className="content is-medium is-blog">
                      <h1 className="title is-spaced"> {post.frontmatter.title} </h1>
                      <p> <small>{post.frontmatter.date}</small> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-cover">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-7-fullhd is-9-widescreen is-10-tablet">
                    <div className="article-image"> <img alt="How diversity can bring us together" src="https://images.unsplash.com/photo-1518914781460-a3ada465edec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ef5d25894ba45b504a8335e1faf50ca&auto=format&fit=crop&w=1050&q=80" /> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-7-fullhd is-9-widescreen is-10-tablet">
                    <div className="content is-medium is-blog">
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      <hr />

                      <ul
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          listStyle: 'none',
                          padding: 0,
                        }}
                      >
                        <li>
                          {
                            previous &&
                            <Link to={previous.fields.slug} rel="prev">
                              ← {previous.frontmatter.title}
                            </Link>
                          }
                        </li>
                        <li>
                          {
                            next &&
                            <Link to={next.fields.slug} rel="next">
                              {next.frontmatter.title} →
                  </Link>
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
          site {
        siteMetadata {
          title
        author
        }
      }
    markdownRemark(fields: {slug: {eq: $slug } }) {
          id
      excerpt
        html
      frontmatter {
          title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
