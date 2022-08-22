import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Favoree ID",
  keywords: "e-wallet",
  description:
    "Favoree.id adalah platform pertama di Indonesia yang membantu konversi saldo antar e-wallet dengan mudah. Kamu cukup melakukan pengajuan konversi pada platform kami, dan kami menjamin saldo kamu sampai ke ewallet tujuan dengan cepat dan biaya yang sangat murah. Sehingga kamu tidak perlu takut ditipu atau kepotong biaya gede",
  ogTitle: "Favoree",
};
export default Meta;
