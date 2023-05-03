import Head from 'next/head';
import {BsFillSunFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillSkype,} from "react-icons/ai";
import Image from 'next/image';
import deved from '../public/xk-ai.png';
import service1 from '../public/wp-logo.png';
import service2 from '../public/react-logo.png';
import service3 from '../public/net-logo.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import logo from '../public/logo-xk.png';
import { useState } from 'react';
import Link from 'next/link';
const RESUME_PDF = 'http://localhost:3000/xk-resume.pdf';

export default function Home() {
  
  {/*Function to switch dark mode*/}
  const [darkMode, setDarkMode] = useState(false);  
  
  {/*Function to download PDF*/}
  const downloadFileAtUrl = (url) =>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Xhuliano Dev</title>
        <meta name='descirption' content="Test"></meta>
        <link rel="icon" href="/xk-favicon.jpg" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          {/*Navigation Menu*/}
          <nav className='nav-menu'>
          <Link href="http://localhost:3000/"><Image src={logo} width={80} height={80} alt="XK Logo"/></Link>          
            <ul className='flex items-center'>
              <li>
                <button className='resume-button' onClick={()=>{downloadFileAtUrl(RESUME_PDF)}}>Resume</button>
                </li>
            </ul>
          </nav>

          {/*Header Section*/}
          <div className='text-center pt-48 p-10 '>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Hey, I'm</h3>
            <h2 className='text-4xl lg:text-8xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500 '>Xhuliano Koci</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Designer.</h3>
            <p className='text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/xhulianokoci" className='social-icons' target="_blank"><AiFillGithub /> </a>
            <a href="https://www.linkedin.com/in/xhuliano-koci/" className='social-icons' target="_blank"><AiFillLinkedin /></a>
            <a href="https://join.skype.com/invite/eTsIUYg2Ap2g" className='social-icons' target="_blank"><AiFillSkype /></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-yellow-500 via-red-500 to-indigo-950  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout="fill" objectFit='cover' alt='my profile picture'/>
          </div>
        </section>

        {/*Cards Section*/}
        <section>
          <div className='text-center p-10'>
            <h3 className='site-title'>Services I Offer</h3>
            <p className='site-paragraph'>
              Since the beginning of my journey as a freelancer designer and developer, I've done remote work for <span className='text-red-500'>agencies </span> 
              consulted for <span className='text-red-500'>startups</span> and collaborated with talended people to create digital products for both business and customer use.
            </p>
            <p className='site-paragraph'>
              I offer from a wide range of services, including programming and Wordpress websites.
            </p>
          </div>

          <div className='lg:flex gap-10 '>
            <div className='card'>
              <Image src={service1} width={100} height={100} className='mx-auto' alt='wordpress logo'/>
              <h3 className='card-title'>Wordpress Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='card-subheader'>Technologies and tools that I use</h4>
              <p className='card-tech'>Photoshop | Illustrator | Figma | Wordpress | Elementor</p>
              <p className='card-tech'>Responsive Design | Optimizaion | Basic SEO | Back-Ups | Migrations</p>
            </div>

            <div className='card'>
            <Image src={service2} width={100} height={100} className='mx-auto' alt='react logo'/>
              <h3 className='card-title'>Front-End Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='card-subheader'>Technologies that I use</h4>
              <p className='card-tech'>HTML5 | CSS3 | Bootstrap | Tailwind </p>
              <p className='card-tech'>Sass | React | NextJS | ThreeJS</p>
            </div>

            <div className='card'>
              <Image src={service3} width={100} height={100} className='mx-auto' alt='dotnet logo'/>
              <h3 className='card-title'>Back-End Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='card-subheader'>Technologies that I use</h4>
              <p className='card-tech'>C# | .NET | .NET Core | ASP.NET </p>
              <p className='card-tech'>MySQL | Hangfire | ClosedXML | SignalR </p>
            </div>
          </div>
        </section>

        {/*Portfolio Section*/}
        <section>
          <div className='text-center p-10'>
            <h3 className='site-title'>Portofolio</h3>
            <p className='site-paragraph'>
              Since the beginning of my journey as a freelancer designer and developer, I've done remote work for <span className='text-teal-500'>agencies </span> 
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talended people to create digital products for both business and customer use.
            </p>
            <p className='site-paragraph'>
              I offer from a wide range of services, including programming and Wordpress websites.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='portfolio-images'><Image src={web1} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
            <div className='portfolio-images'><Image src={web2} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
            <div className='portfolio-images'><Image src={web3} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
            <div className='portfolio-images'><Image src={web4} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
            <div className='portfolio-images'><Image src={web5} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
            <div className='portfolio-images'><Image src={web6} className='image' width={'100%'} height={'100%'} alt='portfolio image'/></div>
          </div>
        </section>

        {/*Contact Form Section*/}
        <section className="bg-white dark:bg-gray-900 py-10">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how can I help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>

        {/*DarkMode Button*/}
        <button onClick={() => setDarkMode(!darkMode)} title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 backdrop-filter backdrop-blur-sm bg-opacity-80 bg-red-500 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl hover:bg-yellow-500 hover:drop-shadow-2xl dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-80 "><BsFillSunFill /></button>

      </main>

      {/*Footer*/}
      <footer className="bg-white dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://localhost:3000/" className="flex items-center mb-4 sm:mb-0">
              <Image src={logo} width={40} height={40} className="h-8 mr-3" alt="XK Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Xhuliano Koci</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="http://localhost:3000/" className="hover:underline">Xhuliano Koci</a></span>
        </div>
      </footer>
    </div>
  );
}
