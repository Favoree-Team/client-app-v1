import Layout from "../src/components/Layout";
import Benefit from "../src/containers/Home/Benefit";
import BlogPreview from "../src/containers/Home/BlogPreview";
import CaraKerja from "../src/containers/Home/CaraKerja";
import FAQ from "../src/containers/Home/FAQ";
import Hero from "../src/containers/Home/Hero";
import Problem from "../src/containers/Home/Problem";
import Testimoni from "../src/containers/Home/Tertimoni";

export default function Home() {
  return (
      <Layout>
        <Hero/>
        <Benefit/>
        <CaraKerja/>
        <Testimoni/>
        <BlogPreview/>
        <FAQ/>
        <Problem/>
      </Layout>
  )
}
