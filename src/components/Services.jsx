import { Image } from "./Image"

// Importación de imágenes
import eggImgMobile from "../assets/mobile/image-transform.jpg"
import eggImgDesktop from "../assets/desktop/image-transform.jpg"
import glassImgMobile from "../assets/mobile/image-stand-out.jpg"
import glassImgDesktop from "../assets/desktop/image-stand-out.jpg"
import { Text } from "./Text"

// Componente Services
export const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      <Image
        order="order-2"
        imgMobile={eggImgMobile}
        imgDesktop={eggImgDesktop}
      />
      <Text
        order="order-1"
        title=" Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow"
      />
      <Image
        order="order-3"
        imgMobile={glassImgMobile} 
        imgDesktop={glassImgDesktop} 
      />
      <Text order="order-4"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places."
        color="bg-Soft-red"
      />
    </section>
  )
}
