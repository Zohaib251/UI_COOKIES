import "./App.css";

//? Components Imports from the components folder located in src folder

import Navbar from "./components/1_Navbar";
import NavbarTop from "./components/1_NavbarTop";
import Card from "./components/2_Card";
import Heading_Desc from "./components/3_Heading_Desc";
import Features_Card from "./components/4_Features_Card";
import Pricing_Card from "./components/5_Pricing_Card";
import ReviewCard from "./components/6_ReviewCard";
import Join_Now from "./components/8_Join_Now";
import Question_Answer from "./components/7_Question_Answer";
import Contact_Info from "./components/9_Contact_Info";
import Footer from "./components/10_Footer";
import Headroom from "react-headroom";

//? Image and Fonts Imports from the image folder located in src folder

import "./image/icons/icomoon/style.css";
import Feature_img1 from "./image/Features_pic/Pic_1.jpg";
import Feature_img2 from "./image/Features_pic/Pic_2.jpg";
import Person_1 from "./image/ReviewCard/person_1.jpg";
import Person_2 from "./image/ReviewCard/person_2.jpg";
import Person_3 from "./image/ReviewCard/person_3.jpg";
import Person_4 from "./image/ReviewCard/person_4.jpg";
import Laptop from "./image/laptop_1.jpg";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          {/* Navbar Section */}
          <div id="home-section">
            {/*  Using Headroom for a sticky header that hides on scroll down and shows on scroll up */}
            <Headroom>
              <NavbarTop />
            </Headroom>
            <Navbar />
          </div>
        </div>
        {/*Card Section  */}
        <div className="Card">
          {/* Each Card component represents a feature with an icon, title, and description */}
          <Card
            iconClass="icon-phone"
            title="Mobile Optimize"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
          <Card
            iconClass="icon-wallet"
            title="Increase Revenue"
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            //? Add custom css for this card
            customTitleStyle={{ marginTop: " 10%" }}
            customDescriptionStyle={{ marginTop: " 11%" }}
          />
          <Card
            iconClass="icon-lightbulb"
            title="Smart Idea"
            description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
          />
        </div>
        {/*Features Section  */}
        <div className="Features" id="features-section">
          {/* Heading for the Features section */}
          <Heading_Desc title="Features" />
          {/* Each Features_Card component represents a feature with an image, title, and description */}
          <Features_Card
            title="Big Benefits for Small Business"
            image={Feature_img1}
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
          <Features_Card
            title="How Frame is different"
            image={Feature_img2}
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            reverse
          />
          <Features_Card
            title="All in One Place"
            image={Feature_img1}
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
        </div>
        {/*Pricing Section */}
        <div className="Pricing" id="pricing-section">
          <Heading_Desc
            title="Choose the plan that’s right for your business"
            customTitleStyle={{ width: "55%", marginLeft: "23%" }}
          />
          <div className="pricing_cards">
            <Pricing_Card
              title="Starter"
              price="$22.99"
              features={[
                "Pointing has no control",
                "A small river named Duden flows",
                "Roasted parts of sentences fly into your mouth",
              ]}
              customButtonClass="hover-black"
            />
            <Pricing_Card
              title="BUSINESS"
              price="$69.99"
              features={[
                "Pointing has no control",
                "A small river named Duden flows",
                "Roasted parts of sentences fly into your mouth",
              ]}
              customButtonClass="hover-blue"
              customClass="featured-card"
            />
            <Pricing_Card
              title="Premium"
              price="$224.99"
              features={[
                "Pointing has no control",
                "A small river named Duden flows",
                "Roasted parts of sentences fly into your mouth",
              ]}
              customButtonClass="hover-black"
            />
          </div>
        </div>
        {/*Review Section */}
        <div className="Review" id="review-section">
          <Heading_Desc title="That’s why 100,000+ Love Frame" />
          <div className="Review_Cards">
            <ReviewCard
              image={Person_1}
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              name="Garry Alexander"
            />
            <ReviewCard
              image={Person_2}
              description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.."
              name="James Robertson"
            />
            <ReviewCard
              image={Person_3}
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              name="Ben Goodrich"
            />
            <ReviewCard
              image={Person_4}
              description="And if she hasn’t been rewritten, then they are still using her."
              name="Kip Hugh"
              customIconsStyle={{ color: "#d9d9d9" }}
            />
            <ReviewCard
              image={Person_2}
              description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.."
              name="James Robertson"
            />
            <ReviewCard
              image={Person_3}
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              name="Ben Goodrich"
            />
          </div>
        </div>
        {/*Question Answer Section  */}
        <div className="Question" id="question-section">
          <Heading_Desc title="Try It Today" />
          <div className="Question_button">
            <button className="button">Get It Now</button>
          </div>
          <div className="image_container">
            <img src={Laptop} alt="Laptop" />
          </div>
          <div className="Question_Answer_Card">
            <Question_Answer
              title="What is Instant?"
              description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            />
            <Question_Answer
              title="Is this available to my country?"
              description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
            />
            <Question_Answer
              title="How do I use the new features of Frame App?"
              description='On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.'
            />
            <Question_Answer
              title="I have technical problem who do I email?"
              description="But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
            />
          </div>
        </div>
        {/*Join Now Section  */}
        <div className="Join_Now_Card">
          <Join_Now />
        </div>
        {/*Contact_Card  */}
        <div className="Contact_Card_Information" id="contact-section">
          <Contact_Info />
        </div>
        {/*Footer  */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
