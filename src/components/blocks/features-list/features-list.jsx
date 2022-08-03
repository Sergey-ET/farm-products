import React from "react";
import Title from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function FeaturesList({ features, level }) {
  return (
    <section className="features">
      {features?.length ? (
        <>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <ul className="features__list">
            {features.map((feature) => (
              <li className="features__item" key={feature.id}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </ul>
          <Button minWidth={260} link="/order">
            Купить
          </Button>
        </>
      ) : null}
    </section>
  );
}

export default FeaturesList;
