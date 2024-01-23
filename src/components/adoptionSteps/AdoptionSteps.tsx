import { useEffect, useState } from "react";
import { steps } from "../../db/adoption.json";
import "./adoptionSteps.scss";

interface Steps {
  id: number;
  title: string;
  paragraf: string;
  pawPhoto: string;
}

export const AdoptionSteps = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [stepsVisibility, setStepsVisibility] = useState<Array<boolean>>(
    steps.map(() => false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (currentScroll / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setStepsVisibility((prevVisibility) =>
      prevVisibility.map((_, index) => {
        return scrollPercentage >= index * 2 && !prevVisibility[index]
          ? true
          : prevVisibility[index];
      })
    );
  }, [scrollPercentage]);

  return (
    <div className="adoption-wrapper">
      {steps.map((step: Steps, index) => (
        <div
          key={step.id}
          className={`steps ${stepsVisibility[index] ? "show" : "hidden"}`}
        >
          <div className="paws" style={{backgroundImage:`url("${step.pawPhoto}")`}}>
            <h1 className="number">
                {step.id}
            </h1> 
            </div>
            <h2 className="title">{step.title}</h2>
            <p className="paragraf">{step.paragraf}</p>
        </div>
      ))}
    </div>
  );
};