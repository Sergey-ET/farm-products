import React from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ features }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <FeaturesList level={TitleLevel.H2} features={features} />
    </>
  );
}

export default MainPage;
