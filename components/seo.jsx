import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle == '' ? 'Paguyuban Barudak Komputer' : `${pageTitle} - Paguyuban Barudak Komputer`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Paguyuban Barudak Komputer merupakan Unit Kegiatan Mahasiswa (UKM) dari Fakultas Ilmu Komputer Universitas Kuningan" />
      <meta name="keywords" content="paguyuban barudak komputer, pbk, pbk fkom, pbk fkom uniku, fakultas ilmu komputer, universitas kuningan" />
      <meta name="subject" content="Unit Kegiatan Mahasiswa (UKM) Paguyuban Barudak Komputer" />
      <meta name="copyright" content="Paguyuban Barudak Komputer" />
      <meta name="language" content="Indonesia" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="coverage" content="Worldwide" />
      <meta name="revisit-after" content="7 days" />
      <meta name="MSSmartTagsPreventParsing" content="TRUE" />
      <meta name="Distribution" content="Global" />
      <meta name="Rating" content="General" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="robots" content="noindex, follow" />
      <meta name="Content-Language" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />

      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {font && <link href={font} rel="stylesheet" />}
    </Head>
  </>
);

export default SEO;