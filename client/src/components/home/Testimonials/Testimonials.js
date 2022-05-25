import { MainContainer } from "../../../styles/shared";
import Slider from "react-slick";
import { Qoute, SingleTestinmonal, TestimonalsSec } from "../../../styles/testimonals";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <MainContainer color='Grey' id='Testimonals' size='50vh' smsize='180vh'>
      <TestimonalsSec>
        <h1>Testimonials</h1>
        <br />
        <Slider {...settings}>
          <SingleTestinmonal>
            <Qoute>"I loved it! I thought the bouquet was really pretty and affordable. You can tell it was made with care."</Qoute>
            <p>- Date Night Bouquet</p>
          </SingleTestinmonal>
          <SingleTestinmonal>
            <Qoute>"Wow! The flowers were so pretty and the way she wrapped the bouquet was so skillfully done. There were a lot of pretty colorful flowers!"</Qoute>
            <p>- Mother's Day Bouquet</p>
          </SingleTestinmonal>
          <SingleTestinmonal>
            <Qoute>"If you are looking for an affordable AND beautiful bouquet of flowers to purchase… FLEURS for VOUS is a great place to go! What I love about them is that they are handmade with care! As I am graduating soon, Alicia did such a good job of creating a beautiful bouquet of flowers for me! She put a lot of thought into the details of the bouquet because all the colors of the flowers matched really well! I totally would recommend FLEURS for VOUS if you have any special occasions."</Qoute>
            <p>- Graduation Bouquet</p>
          </SingleTestinmonal>
          <SingleTestinmonal>
            <Qoute>"I loved them and my mom loved them even more! The designs of the bouquets were super gorgeous and aesthetic, from the flowers chosen to the way they were arranged, with the ribbons and bouquet paper tying it all together."</Qoute>
            <p>- Mother's Day Bouquet</p>
          </SingleTestinmonal>
          <SingleTestinmonal>
            <Qoute>"They are so beautiful! I love it! Hope to get some flowers from here soon, I really love it!"</Qoute>
            <p>- Just Because Bouquet</p>
          </SingleTestinmonal>
          <SingleTestinmonal>
            <Qoute>"Words can't express how easy and affordable getting these gorgeous flowers were! Each bouquet was aesthetically pleasing which made me love them even more! My mom and sister were so happy when receiving them! Everything was very thought out from the flower, ribbon, arrangement, and overall appearance."</Qoute>
            <p>- Mother's Day & Graduation Bouquets </p>
          </SingleTestinmonal>
        </Slider>
      </TestimonalsSec>
    </MainContainer>
  )
}

export default Testimonials;