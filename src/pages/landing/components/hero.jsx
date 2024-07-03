import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div>
    <div>
      <img src={heroBg} alt="hero background" className="object-cover w-full h-full" />
    </div>
    </div>
  )
}

export default Hero