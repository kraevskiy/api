import React                    from "react"
import { graphql, StaticQuery } from "gatsby"

const Logo = () => (
  <StaticQuery query={graphql`
    {
    allWordpressWpLogo{
        edges{
            node{
                url{
                    source_url
                    }
                }
            }
        }
    }
    `} render={props => (<img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />)} />
)

export default Logo
