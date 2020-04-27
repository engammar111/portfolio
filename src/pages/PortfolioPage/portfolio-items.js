import React from 'react';

export default [
  {
    name: 'Kitten Gardens',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>Kitten Gardens</div>
        <div className='portfolio-item__desc'>Simple React App using Api </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
        </div>
        <div className='portfolio-item__links'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://engammar111.github.io/kittensgardens/'
          >
            Kitten Gardens
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/engammar111/kittensgardens'
          >
            Github
          </a>
        </div>
      </div>
    ),
  },
  {
    name: 'Contact Manager',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>Contact Manager</div>
        <div className='portfolio-item__desc'>
          Simple Contact manager App using react, redux and redux -Thunk{' '}
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
        </div>
        <div className='portfolio-item__links'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://engammar111.github.io/contactmanager/'
          >
            Contact Manager
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/engammar111/contactmanager'
          >
            Github
          </a>
        </div>
      </div>
    ),
  },
  {
    name: 'Eshop-store',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>Eshop-store</div>
        <div className='portfolio-item__desc'>
          E-commerce store using Angular and Node.js
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-angular'></i>
          <i className='fab fa-js'></i>
        </div>
        <div className='portfolio-item__links'>
          {/* <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://dev.to/flexdinesh/react-redux-boilerplate-with-best-practices--2pp5'
          >
            Blog
          </a> */}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/engammar111/Eshop-store'
          >
            Github
          </a>
        </div>
      </div>
    ),
  },
];
