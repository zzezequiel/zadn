import { HTMLChakraProps, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import logoWhite from "../../public/Logo-xl-white.png";
import logoBlack from "../../public/Logo-xl-black.png";
import LogoMA from "../../public/LogoMA.png";


type Props = {
  type: string
}
export const Logo = ({type}: Props) => {
  const { colorMode } = useColorMode()
  const logo = colorMode === 'light' ? logoBlack : logoWhite;
  return (
    type == "long"
    ?
   <Image src={logo} alt='zadn logo' width={180} height={180}/> 
   :
   <Image src={LogoMA} alt='zadn logo' width={180} height={180}/>
  )
}
