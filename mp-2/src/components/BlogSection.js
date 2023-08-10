'use client';
import React from 'react';
import { Button, Card } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Navbar from './Navbar.js';

const blogsData = [
  {
    id: 1,
    title: 'Talk with your Child',
    content: 'Menstruation and euphemisms go hand in hand, such as Aunt flow, Aunty, on the rag, and lady business chums, those days...',
    url:
      'https://www.ujaas.in/blogs/how-to-explain-or-have-an-open-conversation-with-a-child-about-menstruation-2',
    image: '/images/Talk about Menstrual with Children.png'
  },
  { 
    id: 2,
    title: 'Maternal Health',
    content:
      'No woman should die giving life. Yet every year 2,400 women and girls die in the Philippines from preventable causes related to pregnancy',
    url: 'https://philippines.unfpa.org/en/topics/maternal-health-3',
    image: '/images/Mama Health.png'
  },
  {
    id: 3,
    title: 'Preventing Teenage Pregnancy',
    content:
      'Teen childbearing can carry health, economic, and social costs for mothers and their children. Teen births in the ..... ',
    url: 'https://www.cdc.gov/vitalsigns/larc/index.html',
    image:'/images/Teenager Pregnancy.png'
  },
  {
    id: 4,
    title: 'Experiencing Late or Skipped Periods? ',
    content:
      'Discover common reasons for late or skipped periods including pregnancy. This is one of the most common......',
    url: 'https://www.ujaas.in/blogs/reasons-for-late-or-skipped-periods',
    image:'/images/Habits.png'
  },
];

const BlogSection = () => {
  return (
    <div>
        <div className='blog-section'>
        <div className=" mx-auto p-4 flex flex-col items-center lg:w-3/4">
        <h1 className="text-3xl font-bold my-10">Latest Blogs & Articles</h1>
        <div className='card-grid' style={{ margin: '0 -10px' }}>
  {blogsData.map((blog) => (
    <Card imgSrc={blog.image} key={blog.id} style={{ marginBottom: '20px' }}>
      <div style={{ padding: '5px' }}>
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-gray-700">{blog.content}</p>
        <div>
        <Button
          href={blog.url}
          gradientMonochrome="purple"
          target="_blank"
          rel="noopener noreferrer"
          pill
          className='end justify-center mt-8 '
        >
          Read More <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
        </div>
      </div>
    </Card>
  ))}
</div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button gradientMonochrome="purple" pill style={{ marginTop: '40px' }} size="xl">
                  Explore Health Library
              </Button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default BlogSection;
