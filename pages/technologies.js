


import TechnologiesComponent from "../components/technologiesComponent"
import Layout from "../components/layout";
import { getPagesData } from "../lib/links";
import { getData } from "../lib/getData";
import useSlider from "../lib/customHooks/useSlider"; 

export async function getStaticProps() {
  const data = await getData("technology");
  const allLinks = getPagesData();
  const siteTitle = "Space Tourism || Technology";
  return {
    props: {
      allLinks,
      data,
      siteTitle,
    },
  };
}

export default function technologies({ allLinks, data, siteTitle }) {
  const [all, toggleCurrent, current] = useSlider(data);
  return (
    <Layout siteTitle={siteTitle} allLinks={allLinks}>
      <TechnologiesComponent
        toggletechnology={toggleCurrent}
        technology={current}
        technologies={all}
        // handleTouchStart={handleTouchStart}
        // handleTouchMove={handleTouchMove}
      />
    </Layout>
  );
}
