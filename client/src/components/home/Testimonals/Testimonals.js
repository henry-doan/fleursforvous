import { MainContainer } from "../../../styles/shared";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <MainContainer color='Black' id='Testimonals'>
      <Container>
        <h1>Testimonals</h1>
        <Slider {...settings}>
          <div>
            <h3>I loved it! I thought the bouquet was really pretty and affordable. You can tell it was made with care.</h3>
            <p>- Date Night Bouquet</p>
          </div>
          <div>
            <h3>Wow! The flowers were so pretty and the way she wrapped the bouquet was so skillfully done. There were a lot of pretty colorful flowers!</h3>
            <p>- Graduation Bouquet</p>
          </div>
          <div>
            <h3>The designs of the bouquets were super gorgeous and aesthetic, from the flowers chosen to the way they were arranged, with the ribbon and bouquet paper tying it all together!</h3>
            <p>- Mother's Day Bouquet</p>
          </div>
        </Slider>
      </Container>
    </MainContainer>
  )
}

export default Testimonals;