import { Briefcase, Code, Download, User } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // ← replace with your real access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
      event.target.reset();
    }
  };

  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-space text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>us</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>At Boomix, we’re more than just a juice — we’re a mission.</h3>
          <p className='text-muted-foreground'>
            As people age, access to proper nutrition becomes harder, and manufactured supplements often come with
            side effects or confusing ingredient lists. That’s why we created a natural, nutrient-rich juice specifically
            formulated for senior citizens who deserve better.
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
              className='flex items-center gap-2 px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300 max-sm:items-center'
              href='#contact'>
              <span className='underline'>Download CV</span><Download className='h-6 w-6 text-primary' />
            </a>
          </div>

          {/* 💬 Contact Form Here */}
          <form onSubmit={onSubmit} className="pt-8 space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-muted bg-background"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-muted bg-background"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-muted bg-background h-32"
            ></textarea>
            <button
              type="submit"
              className="cosmic-button w-full sm:w-fit"
            >
              Submit Form
            </button>
          </form>
        </div>

        <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold'>Web Development</h4>
                <p className='text-muted-foreground'>
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <User className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold'>UI/UX Design</h4>
                <p className='text-muted-foreground'>
                  Designing intuitive user interfaces and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold'>Project Management</h4>
                <p className='text-muted-foreground'>
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
