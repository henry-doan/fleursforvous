import { MainContainer } from "../../../styles/shared";
import '../../../styles/gall.css';
import igPost1 from '../../../images/igPosts/igPost1.jpeg';
import igPost2 from '../../../images/igPosts/igPost2.jpeg';
import igPost3 from '../../../images/igPosts/igPost3.jpg';
import igPost4 from '../../../images/igPosts/igPost4.jpg';
import igPost5 from '../../../images/igPosts/igPost5.jpg';
import igPost6 from '../../../images/igPosts/igPost6.jpg';
import igPost7 from '../../../images/igPosts/igPost7.jpg';
import igPost8 from '../../../images/igPosts/igPost8.jpg';

const Gallery = () => (
  <MainContainer size='115vh' smsize='180vh' id="Gallery" color='White'>
    <div className="instagram-section">
      <div className="image-grid-instagram absolute-6" style= {{ willChange: "transform", transform: "translate3d(8.33832%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost7} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 230px, 30vw"  alt="igpost7" className="image" />
      </div>
      <div className="image-grid-instagram">
        <img src={igPost1} loading="lazy" alt="igpost1" className="image" />
      </div>
      <div className="image-grid-instagram absolute-first" style={{ willChange: "transform", transform: "translate3d(-4.67664%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost3} loading="lazy" alt="igpost3" className="image" />
      </div>
      <div className="image-grid-instagram absolute-second" style={{ willChange: "transform", transform: "translate3d(-3.96145%, -3.8677%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost5} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 100px, 11vw" alt="igpost5" className="image" />
      </div>
      <div className="image-grid-instagram absolute-third" style={{ willChange: "transform", transform: "translate3d(-2.9229%, 7.16925%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost4} loading="lazy" alt="igpost4" className="image" style={{ willChange: "transform", transform: "translate3d(0px, 0.92878%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
      </div>
      <div className="image-grid-instagram absolute-fifth" style={{ willChange: "transform", transform: "translate3d(11.9764%, 8.05602%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost6} loading="lazy" width="400" alt="igpost5" className="image" />
      </div>
      <div className="image-grid-instagram absolute-seventh" style={{ willChange: "transform", transform: "translate3d(2.9229%, 2.03814%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost8} loading="lazy" alt="igPost8" className="image" style={{ willChange: "transform", transform: "translate3d(0px, -17.3396%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
      </div>
      <div className="image-grid-instagram absolute-fourth" style={{ willChange: "transform", transform: "translate3d(4.75374%, -0.90584%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
        <img src={igPost2} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 150px, (max-width: 1439px) 18vw, 19vw" alt="igPost2" className="image" style={{ willChange: "transform", transform: "translate3d(0px, -11.6698%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
      </div>
      <div className="container-text-instagram">
        <h2 className="instagram-heading">
          Follow us on instagram
        </h2>
        <p>
          <a className="instagram-name" href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'>@fleursforvous</a>
        </p>
      </div>
    </div>
  </MainContainer>
)

export default Gallery;