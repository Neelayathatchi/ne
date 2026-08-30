import SpaceExplorer from "../../components/spaces/SpaceExplorer/SpaceExplorer";

import WorkModeHive from "../../components/workspace/WorkModeHive";

import Footer from "../../components/common/Footer/Footer";


const SpacesPage = () => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        background: "#ffffff",
        overflow: "visible",
      }}
    >
      {/* SECTION 01 — SPACE EXPLORER */}
      <SpaceExplorer />


      {/* SECTION 02 — INTERACTIVE BEE WORK MODES */}
      <WorkModeHive />


      {/* FOOTER */}
      <Footer />
    </main>
  );
};


export default SpacesPage;