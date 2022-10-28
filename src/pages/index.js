import { Box } from '@chakra-ui/react'
import Layout from '@components/Layout'
import Benefit from '@containers/Home/Benefit'
import BlogPreview from '@containers/Home/BlogPreview'
import CaraKerja from '@containers/Home/CaraKerja'
import FAQ from '@containers/Home/FAQ'
import Hero from '@containers/Home/Hero'
import Problem from '@containers/Home/Problem'
import Testimoni from '@containers/Home/Tertimoni'

export default function Home() {
  return (
    <Layout>
      <Box maxW={'7xl'} margin={'auto'}>
        <Hero />
        <Benefit />
        <CaraKerja />
        <Testimoni />
        <BlogPreview />
        <FAQ />
        <Problem />
      </Box>
    </Layout>
  )
}

// 812 + 396 = 1208

// 1239
