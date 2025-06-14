import { Briefcase, Code, Download, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        {''}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-space text-3xl md:text-4xl font-bold mb-12 text-center'>
                About<span className='text-primary'> me</span>
            </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Passionate web Developer and Tech Creator</h3>
                <p className='text-muted-foreground '>
                    With over 3 years of experience in web development , i socialize
                    in creating responsive and accessible  web
                    applications using modern technologies.
                </p>
                <p className='text-muted-foreground'>
                    🎓 I'm a Computer Science student passionate about coding and technology.
                    💻 I work with Java, CSS, React, HTML, and MySQL to build responsive, functional, and efficient applications.
                    🌱 Currently, I'm diving deeper into full-stack development and enhancing my problem-solving skills.
                    🚀 Let's connect and create something amazing together!
                </p>
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a className='cosmic-button' href='#contact'>
                        Get in Touch
                    </a>
                     <a 
                        className=' flex items-center gap-2 px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300 max-sm:items-center' 
                        href='#contact'>
                        <span className='underline'>Download CV</span><Download className=' h-6 w-6 text-primary'/>
                    </a>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'>Web Develoment</h4>
                            <p className='text-muted-foreground'>
                                Creating Resonsive websites and web applications 
                                with modern frameworks
                            </p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <User className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'>UI/UX Design</h4>
                            <p className='text-muted-foreground'>
                               Designing intuitive user interfaces and seamless user exeriences
                            </p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Briefcase className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'>Project Managment</h4>
                            <p className='text-muted-foreground'>
                               Leading projects from conception to completion with agile methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutSection
