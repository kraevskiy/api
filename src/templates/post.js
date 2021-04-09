import React  from "react"
import Layout from "../components/layout"

export default ({ pageContext: { data: pageContext } }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <small>{pageContext.date}</small>
    <div>
      <img src={pageContext.featured_media?.source_url} alt="" />
    </div>
    <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

