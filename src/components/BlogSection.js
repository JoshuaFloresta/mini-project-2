import React from 'react';

const blogsData = [
  {
    id: 1,
    title: 'Habits That Could Be The Reason For Delayed Menstrual Cycle',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur?',
    url:
      'https://www.ujaas.in/blogs/delayed-period-the-harmful-habits-that-affect-menstrual-cycle',
    image: '/my-blog-app/public/images/periodDelay.jpg'
  },
  {
    id: 2,
    title: 'How to Explain or Have an Open Conversation with a Child about Menstruation?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla.',
    url:
      'https://www.ujaas.in/blogs/how-to-explain-or-have-an-open-conversation-with-a-child-about-menstruation-2',
    image: '/my-blog-app/public/images/TalkwithDaughter.jpg'
  },
  { 
    id: 3,
    title: 'Maternal Health',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur?',
    url: 'https://philippines.unfpa.org/en/topics/maternal-health-3',
    image: '/my-blog-app/public/images/MaternalHealth.jpg'
  },
  {
    id: 4,
    title: 'Preventing Teenage Pregnancy',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ea?',
    url: 'https://www.cdc.gov/vitalsigns/larc/index.html',
    image:'/my-blog-app/public/images/TeenagePregnancy.jpg'
  },
];

const BlogSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {blogsData.map((blog) => (
        <div key={blog.id}>
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className="card-content p-4">
              <h3 className="card-title text-lg font-bold mb-2">{blog.title}</h3>
              <p className="card-text">{blog.content}</p>
              <a
                href={blog.url}
                className="btn btn-primary mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
