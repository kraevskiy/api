import React                    from "react"
import { graphql, StaticQuery } from "gatsby"
import styled                   from "styled-components"
import Logo                     from "./Logo"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
  display: flex;
  align-items: center;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteLogo = styled.div`
  max-width: 150px;
  display: block;
  margin-right: 10px;
`

const SiteInfo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressSiteMetadata{
        edges{
          node{
            name
            description
          }
        }
      }
      allWordpressWpLogo{
        edges{
          node{
            url{
              alt_text
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
    <SiteInfoWrapper>
      <SiteLogo>
        <Logo/>
      </SiteLogo>
      <div>
        <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        {props.allWordpressSiteMetadata.edges[0].node.description}
      </div>
    </SiteInfoWrapper>
  )} />
)

export default SiteInfo
