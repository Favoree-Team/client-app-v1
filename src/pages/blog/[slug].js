import Layout from '@components/Layout'
import Post from '@containers/BlogDetail/Post'
import OtherArticles from '@src/containers/BlogDetail/OtherArticles'

const BlogDetail = () => {
  return (
    <Layout>
      <Post />
      <OtherArticles />
    </Layout>
  )
}

export default BlogDetail
