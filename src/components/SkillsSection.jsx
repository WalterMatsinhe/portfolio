import React from 'react'
import { useState } from 'react';
import { cn } from '../lib/utils';

const skills = [
    {name:'HTML/CSS', level:95, category:'frontend'},
    {name:'JavaScrit', level:77, category:'frontend'},
    {name:'React', level:85, category:'frontend'},
    {name:'Tailwind CSS', level:68, category:'frontend'},
    {name:'Next.js', level:35, category:'frontend'},

    {name:'Java', level:95, category:'backend'},
    {name:'NodeJS', level:75, category:'backend'},
    {name:'C', level:95, category:'backend'},
    {name:'C#', level:95, category:'backend'},
    {name:'MySql', level:75, category:'backend'},
    {name:'NPM', level:95, category:'backend'},

    {name:'Git/GitHub', level:75, category:'tools'},
    {name:'VS Code', level:95, category:'tools'},
    {name:'SQL server Managment', level:65, category:'tools'}
]

const categories = ['all', 'frontend', 'backend', 'tools'];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredSkills = skills.filter(
        (skill) => activeCategory === 'all' || skill.category === activeCategory  
    );

    return (
        <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My<span className='text-primary'> Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button 
                          className={cn(
                            'px-5 rounded-full transition-colors duration-300 capitalizeds',
                            activeCategory === category ? 'bg-primary text-primary-foreground': 'bg-secondary/70 text-foreground hover:bd-secondary'
                        )}  
                          key={key}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full  overflow-hidden'>
                                <div
                                    className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                    style={{width: skill.level + '%'}}
                                />
                            </div>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>
                                    {skill.level}
                                </span>%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
