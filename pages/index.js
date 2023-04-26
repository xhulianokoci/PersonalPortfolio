import Head from 'next/head';
import {BsFillMoonFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillSkype,} from "react-icons/ai";
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/Wordpress-Logo.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import logo from '../public/logo-xk.png';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Xhuliano Dev</title>
        <meta name='descirption' content="Test"></meta>
        <link rel="icon" href="/xk-favicon.jpg" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
          <Link href="localhost:3000"><Image src={logo} width={80} height={80} /></Link>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
                </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Hey, I'm</h3>
            <h2 className='sm:text-8xl md:text-6xl lg:text-8xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500 '>Xhuliano Koci</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Designer.</h3>
            <p className='text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/xhulianokoci" class="flex items-center mb-4 sm:mb-0"><AiFillGithub /> </a>
            <a href="https://www.linkedin.com/in/xhuliano-koci/" class="flex items-center mb-4 sm:mb-0"><AiFillLinkedin /></a>
            <a href="https://join.skype.com/invite/eTsIUYg2Ap2g" class="flex items-center mb-4 sm:mb-0"><AiFillSkype /></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-yellow-500 via-red-500 to-indigo-950  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout="fill" objectFit='cover'/>
          </div>
        </section>

        
        <section>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1  dark:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500 '>Services I Offer</h3>
            <p className='text-medium py-5 leading-8 md:text-xl text-gray-800 max-w-6xl mx-auto dark:text-white'>
              Since the beginning of my journey as a freelancer designer and developer, I've done remote work for <span className='text-red-500'>agencies </span> 
              consulted for <span className='text-red-500'>startups</span> and collaborated with talended people to create digital products for both business and customer use.
            </p>
            <p className='text-medium py-5 leading-8 md:text-xl text-gray-800 max-w-6xl mx-auto dark:text-white'>
              I offer from a wide range of services, including programming and Wordpress websites.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500 dark:text-white'>Wordpress Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='py-4 text-teal-600'>Technologies and tools that I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Photoshop | Illustrator | Figma | Wordpress | Elementor</p>
              <p className='text-gray-800 py-1 dark:text-white'>Responsive Design | Optimizaion | Basic SEO | Back-Ups | Migrations</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-indigo-800 dark:text-white'>Front-End Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='py-4 text-teal-600'>Technologies that I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>HTML5 | CSS3 | Bootstrap | Tailwind </p>
              <p className='text-gray-800 py-1 dark:text-white'>Sass | React | NextJS | ThreeJS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-indigo-800 dark:text-white'>Back-End Developer</h3>
              <p className='py-2 dark:text-white'>Creating elegant website designs suited for your needs following your design theory.</p>
              <h4 className='py-4 text-teal-600'>Technologies that I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>HTML5 | CSS3 | Bootstrap | Tailwind </p>
              <p className='text-gray-800 py-1 dark:text-white'>Sass | React | NextJS | ThreeJS</p>
            </div>
          </div>
        </section>

        <section>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1 dark:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-red-500 to-yellow-500'>Portofolio</h3>
            <p className='text-medium py-5 leading-8 md:text-xl text-gray-800 max-w-6xl mx-auto dark:text-white'>
              Since the beginning of my journey as a freelancer designer and developer, I've done remote work for <span className='text-teal-500'>agencies</span> 
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talended people to create digital products for both business and customer use.
            </p>
            <p className='text-medium py-5 leading-8 md:text-xl text-gray-800 max-w-6xl mx-auto dark:text-white'>
              I offer from a wide range of services, including programming and Wordpress websites.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'}/></div>
          </div>
        </section>
      </main>


      <footer class="bg-white dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
              <Image src={logo} width={40} height={40} class="h-8 mr-3" alt="Xhuliano Koci Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Xhuliano Koci</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Xhuliano Koci</a></span>
        </div>
      </footer>
    </div>
  );
}
