import React from 'react';
import Footer from './Footer';

const aboutUsData = [
  {
    id: 1,
    imageSrc: "https://media.licdn.com/dms/image/C5603AQEJxGBovvQ8OQ/profile-displayphoto-shrink_400_400/0/1565020496907?e=2147483647&v=beta&t=LUUIbq_Q6H9rNMKpQcMJZgKw7AxnR4hJc1pjovd0d2k",
    name: "Ritesh Agarwal",
    description: "Homes was founded by Ritesh Agarwal, the first resident Asian to be accepted to the Thiel Fellowship (started by Paypal founder Peter Thiel). Travelling across India at the age of 17, Ritesh stayed in more than 100 bed and breakfasts, guest houses, and hotels to realize there was a massive dearth of affordable and good-quality hotels in the unbranded budget hotel category."
  },
  {
    id: 2,
    imageSrc: "https://qph.cf2.quoracdn.net/main-thumb-159491302-200-xqizhsxbgsrcgubkqqesvqskxjqbebnt.jpeg",
    name: "Troy Alstead",
    description: "Padma Shri, Khel Ratna & Arjuna Awardee, is India’s first paraplegic woman biker, swimmer, rallyist & India’s first ever female Paralympic medalist. She has continually risen above all odds, while also enabling people with disabilities through her foundation Wheeling Happiness. She also serves as the President of the Paralympic Committee of India and has led the most successful Paralympic Team in Indian history at Tokyo 2020."
  },
  {
    id: 3,
    imageSrc: "https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1",
    name: "Aditya Ghosh",
    description: "Aditya Ghosh is a seasoned business leader with over 22 years of experience. Aditya is currently a member of the Board of Directors at OYO. Most recently, he was the CEO at OYO Hotels & Homes- India & South Asia.Fellowship (started by Paypal founder Peter Thiel). Travelling across India at the age of 17, Ritesh stayed in more than 100 bed and"
  },
];

const AboutUs = () => (
  <div>
    <h1 id="about_h2">About Us</h1>

    {aboutUsData.map((card) => (
      <div className="container" key={card.id}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img style={{borderRadius:"10px"}} src={card.imageSrc} className="img-fluid" alt="" width="500px" />
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>{card.name}</h1>
            <br />
            <br />
            <h4 style={{ wordSpacing: '20px' }}>{card.description}</h4>
          </div>
        </div>
      </div>
    ))}
        <Footer className='footer' />
  </div>
);

export default AboutUs;
