import { MainContainer } from "../../../styles/shared";
import '../../../styles/gall.css';
import igPost1 from '../../../images/igPosts/igPost1.jpg';
import igPost2 from '../../../images/igPosts/igPost2.jpeg';
import igPost3 from '../../../images/igPosts/igPost3.jpg';
import igPost4 from '../../../images/igPosts/igPost4.jpg';
import igPost5 from '../../../images/igPosts/igPost5.jpg';
import igPost6 from '../../../images/igPosts/igPost6.jpg';
import igPost7 from '../../../images/igPosts/igPost7.jpg';
import igPost8 from '../../../images/igPosts/igPost8.jpg';
import { Instagram } from "react-bootstrap-icons";
import { GallImg, GallItemFifth, GallItemFirst, GallItemFourth, GallItemSecond, GallItemSeventh, GallItemSixth, GallItemThird, IGGridItem, IGHandler, IGHandlerContainer, IGHandlerIcon, IGText, InstagramSection } from "../../../styles/gallery";

const OldGallery = () => (
  <>
    <MainContainer size='1150px' smsize='2200px' xssize='1500px' id="Gallery" color='White'>
      <InstagramSection>
        <GallItemSixth style={{ willChange: "transform", transform: "translate3d(8.33832%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
          <GallImg src={igPost3} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 230px, 30vw"  alt="igpost3" />
        </GallItemSixth>
        <IGGridItem>
          <GallImg src={igPost1} loading="lazy" alt="igpost1" className="image" />
        </IGGridItem>
        <GallItemFirst>
          <GallImg src={igPost7} loading="lazy" alt="igpost7" className="image" />
        </GallItemFirst>
        <GallItemSecond>
          <GallImg src={igPost5} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 100px, 11vw" alt="igpost5" className="image" />
        </GallItemSecond>
        <GallItemThird>
          <GallImg src={igPost4} loading="lazy" alt="igpost4" className="image" style={{ willChange: "transform", transform: "translate3d(0px, 0.92878%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
        </GallItemThird>
        <GallItemFifth>
          <GallImg src={igPost6} loading="lazy" width="400" alt="igpost5" className="image" />
        </GallItemFifth>
        <GallItemSeventh>
          <GallImg src={igPost8} loading="lazy" alt="igPost8" className="image" style={{ willChange: "transform", transform: "translate3d(0px, -17.3396%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
        </GallItemSeventh>
        <GallItemFourth>
          <GallImg src={igPost2} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 150px, (max-width: 1439px) 18vw, 19vw" alt="igPost2" className="image" style={{ willChange: "transform", transform: "translate3d(0px, -11.6698%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
        </GallItemFourth>
        <IGHandlerContainer>
          <IGText>
            Follow Us On Instagram <IGHandlerIcon href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'><Instagram /></IGHandlerIcon>
          </IGText>
          <p>
            <IGHandler href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'>
              @fleursforvous
            </IGHandler>
          </p>
        </IGHandlerContainer>
      </InstagramSection>
    </MainContainer>
  </>
)

export default OldGallery;