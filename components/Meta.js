import Head from "next/head";

// wird in Layout.js eingebunden
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'get the latest news in WebDev'
}

export default Meta;