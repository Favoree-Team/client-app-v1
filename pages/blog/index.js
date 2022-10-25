import HeroBlog from '@containers/Blog/Hero'
import Search from '@containers/Blog/Search'
import Layout from '@components/Layout'
import Articles from '@containers/Blog/Articles'

const Blog = () => {
  return (
    <Layout>
      <HeroBlog />
      <Search />
      <Articles />
    </Layout>
  )
}

export default Blog
