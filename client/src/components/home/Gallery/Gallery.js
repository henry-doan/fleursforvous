import { MainContainer } from "../../../styles/shared";
import { Instagram } from "react-bootstrap-icons";
import { GallCol, GallHeader, GallRow, GalPic } from "../../../styles/gal";
import { IGHandler, IGHandlerIcon } from "../../../styles/gallery";
import igPost1 from '../../../images/igPosts/igPost1.jpg';
import igPost2 from '../../../images/igPosts/igPost2.jpg';
import igPost3 from '../../../images/igPosts/igPost3.jpg';
import igPost4 from '../../../images/igPosts/igPost4.jpg';
import igPost5 from '../../../images/igPosts/igPost5.jpg';
import igPost6 from '../../../images/igPosts/igPost6.jpg';
import igPost7 from '../../../images/igPosts/igPost7.jpg';
import igPost8 from '../../../images/igPosts/igPost8.jpg';

const Gallery = () => (
  <>
    <MainContainer size='1350px' smsize='2200px' xssize='3600px' id="Gallery" color='White'>
      <GallHeader>
        <h1>
          Follow Us On Instagram <IGHandlerIcon href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'><Instagram /></IGHandlerIcon>
        </h1>
        <p>
          <IGHandler href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'>
            @fleursforvous
          </IGHandler>
        </p>
      </GallHeader>
      <GallRow>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost3}
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost1}
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost2}
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost7}
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost5}
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost6}
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost4}
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src={igPost8}
          />
        </GallCol>
      </GallRow>
    </MainContainer>
  </>
) 

export default Gallery;