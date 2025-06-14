import { ArrowDown } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in delay-[0ms]'>Hi, I'm </span>
            <span className='opacity-0 text-primary animate-fade-in delay-[300ms]'>Walter</span>
            <span className='opacity-0 text-gradient ml-2 animate-fade-in delay-[500ms]'>Matsinhe</span>
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto mt-10 mb-8 opacity-0 animate-fade-in-delay-3'>
            🎓 I'm a Computer Science student passionate about coding and technology.
            💻 I work with Java, CSS, React, HTML, and MySQL to build responsive, functional, and efficient applications.
            🌱 Currently, I'm diving deeper into full-stack development and enhancing my problem-solving skills.
            🚀 Let's connect and create something amazing together!
          </p>
          <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
            <a className='text-xl cosmic-button' href='#projects'>
                View my Work
            </a>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
      <span className='text-sm text-muted-foreground mb-2'>scroll</span>
      <ArrowDown className='h-5 w-5 text-primary'/>
      </div>
    </section>
  );
};

export default HeroSection;
