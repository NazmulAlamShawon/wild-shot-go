import React from 'react';

const Blog = () => {
    return (
        <div>
        <section>
             <article className='p-5'>
             <h3>Difference between authorization and authentication?</h3>
                 <h3> Authentication</h3>
                 <p> It's tells <strong>who are you </strong>.It work with <strong> password,one time pine,biomatrice information and Difference provider</strong> enter by the user.It is <strong>first step for good identity </strong>.It is <strong> changeable</strong> system by the user. </p>
                   <h3>Authorization </h3>
                   <p>It depend on which <strong>type of resource </strong> are you using for access.It is <strong> maintain by a organization </strong>. It take's place after authentication.It is <strong>not changeable.</strong> </p>
                 
             </article>
             <article className='p-5'>
             <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
             <p> I love firebase because it has a lot of facilty and benifit for web development and app also cloud server maintain. We can stor data in firebase also can do authetication for access of a website by users.I am using google,github and facebook the most common method uses for website.I </p>                 </article>
          <article className='p-5'>
              <h3>What other services does firebase provide other than authentication?</h3>
              <p>Firebase has lot of services.Authentiaction,database,storage,hosting functin and machine learning for variouse service </p>
          </article>
        </section>
    </div>
    );
};

export default Blog;