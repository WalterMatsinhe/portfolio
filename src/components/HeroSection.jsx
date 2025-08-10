import { ArrowDown } from "lucide-react";
import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen">
      <div className="flex items-start justify-start px-4 sm:px-8 mt-[60px] sm:mt-[100px] ml-2 sm:ml-6">
        <div className="flex flex-col justify-center overflow-ellipsis items-start z-10 leading-[0.8] tracking-[-0.08em]">
          <BoxReveal boxColor={"hsl(var(--primary))"} duration={2.5}>
            <h1 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold">
              Hi,
              <span className="text-[80px] sm:text-[120px] md:text-[200px] font-bold ml-2 sm:ml-6 opacity-0 animate-fade-in delay-[0ms]">
                I'm
              </span>
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"white"} duration={3.5}>
            <h1 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold text-primary opacity-0 animate-fade-in delay-[300ms] mb-2">
              Walter
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"hsl(var(--primary))"} duration={4.5}>
            <h1 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold opacity-0 animate-fade-in delay-[500ms] mb-2">
              Matsinhe
            </h1>
          </BoxReveal>
        </div>
      </div>

      <div className="flex items-center justify-between   mt-3 pt-6 opacity-0 animate-fade-in-delay-4">
        <div className="flex items-center justify-center ml-8">
        <div className="flex flex-col items-center justify-center animate-bounce">
          <span className="text-sm text-muted-foreground ">scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
        </div>
        <div className ='mr-18'>
          <InteractiveHoverButton>
          <a  href="#projects" >
          View my Work
        </a>
        </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;