import React    from "react"
import Layout   from "../components/layout"
import { Link } from "gatsby"
import styled   from "styled-components"

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`
const PageNumberWrapper = styled.div`
  border: 1px solid #eeeeee;
  background: ${props => props.isCurrentPage ? '#eee' : 'white'};
`

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  box-sizing: border-box;
  text-decoration: none;
`

export default ({pageContext}) => (
  <Layout>
    {pageContext.posts.map(post=>(
      <div key={post.node.id}>
        <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
        <small>
          {post.node.date}
        </small>
        <p dangerouslySetInnerHTML={{__html: post.node.content}} />
        <div>
          <Link to={`/post/${post.node.slug}`}>
            More.....
          </Link>
        </div>
      </div>
    ))}

    <Pagination>
      {Array.from({length: pageContext.numberOfPages}).map((page, index)=>(
        <PageNumberWrapper key={index} isCurrentPage={index+1 === pageContext.currentPage}>
          <PageNumber to={index === 0 ? "/blog" : `/blog/${index + 1}`}>
            {index + 1}
          </PageNumber>
        </PageNumberWrapper>
      ))}
    </Pagination>
  </Layout>
)

