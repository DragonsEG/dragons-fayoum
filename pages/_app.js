import "../styles/globals.css";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp/Header";
import Head from "next/head";
import Join from './Join';
function MyApp({ Component, pageProps }) {
 
 let nav_links = [
  {
    id: 1,
    name: "Tracks",
    link: "/tracks",
  },
  {
    id: 2,
    name: "Talents",
    link: "/talents",
  },
  {
    id: 3,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    name: "Board",
    link: "/board",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
  ];
let Join = [
  {
    id: 1,
    name: "Join Us",
    link: "/join",
  }];
 
  return (
    <>
          <Head>
        <title>Dragons</title>
        <meta
          property='og:Dragons'
          content='Dragons'
          key='Dragons'
        />       
        <link rel='shortcut icon' href='/Identity/test.svg' />
      </Head>

  <HeaderComp
        nav_links={nav_links}
        Join={Join}
  />




    
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
