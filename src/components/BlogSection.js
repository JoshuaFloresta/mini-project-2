'use client';
import React from 'react';
import { Button, Card } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './Blog.css';
import Navbar from './Navbar.js';

const blogsData = [
  {
    id: 1,
    title: 'Talk with your Child',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla.',
    url:
      'https://www.ujaas.in/blogs/how-to-explain-or-have-an-open-conversation-with-a-child-about-menstruation-2',
    image: '/images/Talk about Menstrual with Children.png'
  },
  { 
    id: 2,
    title: 'Maternal Health',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur?',
    url: 'https://philippines.unfpa.org/en/topics/maternal-health-3',
    image: '/images/Mama Health.png'
  },
  {
    id: 3,
    title: 'Preventing Teenage Pregnancy',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ea?',
    url: 'https://www.cdc.gov/vitalsigns/larc/index.html',
    image:'/images/Teenager Pregnancy.png'
  },
];

const BlogSection = () => {
  return (
    <div>
      <Navbar />
        <div className='blog-section'>
        <div className="container mx-auto p-4 flex flex-col items-center lg:w-3/4">
        <h1 className="text-3xl font-bold mb-10">Menstrual Health Blog</h1>
        <div className='card-grid' style={{ margin: '0 -10px' }}>
  {blogsData.map((blog) => (
    <Card imgSrc={blog.image} key={blog.id} style={{ marginBottom: '20px' }}>
      <div className="mt-4" style={{ padding: '10px' }}>
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-gray-700">{blog.content}</p>




        <Button
          href={blog.url}
          gradientMonochrome="pink"
          target="_blank"
          rel="noopener noreferrer"
          pill
          style={{ marginTop: '10px' }}
        >
          Read More <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </Card>
  ))}
</div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button gradientMonochrome="pink" pill style={{ marginTop: '40px' }} size="xl">
                  Explore Health Library
              </Button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default BlogSection;
