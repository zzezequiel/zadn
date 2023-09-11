import { HTMLChakraProps, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import logoWhite from "../../public/Logo-xl-white.png";
import logoBlack from "../../public/Logo-xl-black.png";
export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const { colorMode } = useColorMode()
  const logo = colorMode === 'light' ? logoBlack : logoWhite
  return (
   <Image src={logo} alt='zadn logo' width={180} height={180}/> 
  )
}
