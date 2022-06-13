import { MainContainer } from "../../../styles/shared";
import { Instagram } from "react-bootstrap-icons";
import { GallCol, GallHeader, GallRow, GalPic } from "../../../styles/gal";
import { IGHandler, IGHandlerIcon } from "../../../styles/gallery";

const Gallery = () => (
  <>
    <MainContainer size='1350px' smsize='2200px' xssize='4500px' id="Gallery" color='White'>
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
            src='https://images.unsplash.com/photo-1622658641558-235f26dd270b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80'
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1619962992057-be492a5816f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          />
        </GallCol>
        <GallCol>
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1622658641558-1bf6a846adeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          />
          <GalPic 
            loading="lazy" 
            alt="igpost"
            src='https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
          />
        </GallCol>
      </GallRow>
    </MainContainer>
  </>
) 

export default Gallery;