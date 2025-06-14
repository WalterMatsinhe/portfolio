import { ArrowRight, ExternalLink, Github, Key } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id:1,
        title:'Movie App',
        description: 'A beautifull app to search for movies using React',
        image: 'Projects/MovieApp.PNG',
        tags: ['React', 'TailwindCss','Vite'],
        demoUrl:'#',
        githubUrl:'#'
        
    },
    {
        id:2,
        title:'Portfolio',
        description: 'A beautifull app about my skills  using React',
        image: 'Projects/Portfolio.PNG',
        tags: ['React', 'TailwindCss','Vite'],
        demoUrl:'#', 
        githubUrl:'#'
    },
    {
        id:3,
        title:'Movie App',
        description: 'A beautifull app to search for movies using React',
        image: 'Projects/MovieApp.PNG',
        tags: ['React', 'TailwindCss', 'Vite'],
        demoUrl:'#',
        githubUrl:'#'
    }

]

const ProjectsSection = () => {
  return (
    <section id = 'projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
                Featured<span className='text-primary'> Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects. Each project was carefully crafted
                 with attention to detail, performace, and user experience
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                   <div 
                     key={project.id}
                     className=' group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                   >
                    <div className='h-48 overflow-hidden'>
                        <img 
                          src = {project.image}
                          alt = {project.title}
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>
                    <div className='p-6 '>
                        <div className='flex flex-wrap gap-2 mb-4'>
                          {project.tags.map((tag) => (
                            <span className='px-2 py-1 text-xs font-medium  rounded-full bg-secondary text-secondary-foreground'> 
                               {tag}
                            </span>
                          ))}
                        </div> 

                    <h3 className='text-xl font font-semibold mb-1'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-3'>
                            <a 
                              className='text-foreground/80 hover:text-primary transition-colors duration-300'
                              href={project.demoUrl}
                              target='_blank'
                              >
                                <ExternalLink size={20}/>
                            </a >
                            <a 
                              className='text-foreground/80 hover:text-primary transition-colors duration-300'
                              href={project.githubUrl}
                              >
                                <Github size={20}/>
                            </a>
                        </div>
                        </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <a 
                  className='cosmic-button w-fit flex items-center mx-auto gap-2 '
                  href='https://github.com/walter2000matsinhe'
                  target='_blank'
                >
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection
