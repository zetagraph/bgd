import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: "Ten principles of Good Design by Dieter Rams - Layout by Andrei Zvonkov - UX Designer",
  title: "Ten principles of Good Design by Dieter Rams - Andrei Zvonkov - UX Designer",
  url: "",
  author: "",
  keywords: ["Portfolio", "Design", "UX", "Web Development"],
  img: "",
}

const SEO = () => {
  return (
    <Helmet>
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />
      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
