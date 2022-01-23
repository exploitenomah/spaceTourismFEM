
import CrewComponent from "../components/crewComponent";
import Layout from "../components/layout";
import { getPagesData } from "../lib/links";
import { getData } from "../lib/getData"
import useSlider from "../lib/customHooks/useSlider"; 

export async function getServerSideProps() {
  const data = await getData("crew");
  const allLinks = getPagesData();
  const siteTitle = "Space Tourism || Crew";
  return {
    props: {
      allLinks,
      data,
      siteTitle,
    }, 
  };
}

export default function crew({ allLinks, data, siteTitle }) {
    const [all, toggleCurrent, current, handleTouchStart, handleTouchMove] =
      useSlider(data);
  return (
    <Layout siteTitle={siteTitle} allLinks={allLinks}>
      <CrewComponent
        togglecrewMember={toggleCurrent}
        crewMember={current}
        crew={all}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
      />
    </Layout>
  );
}
