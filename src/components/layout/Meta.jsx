import Head from 'next/head';
import { siteConfig } from '../../config/site';

const Meta = () => {
  const imageUrl = `${siteConfig.url}/images/tortuga-con-gafas.jpg`;

  return (
    <Head>
      <title>{siteConfig.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteConfig.description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteConfig.url} />
      <meta property="twitter:title" content={siteConfig.title} />
      <meta property="twitter:description" content={siteConfig.description} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Meta;
