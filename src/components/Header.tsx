import { Flex, Link, Text } from "@chakra-ui/react";
import LOGO from '@/assets/Tokamak_transparent.png'
import Image from 'next/image'

export default function Header() {
  return (
    <Flex
      w={'70%'}
      // minW={''}
      h={'80px'}
      bg={'#fff'}
      color={'#1c1c1c'}
      fontSize={'16px'}
      fontWeight={600}
      justifyContent={'space-between'}
      // alignItems={'center'}
      flexDir={'row'}
    >
      <Flex
        ml={'11px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image width={40} src={LOGO} alt="" />
        <Flex
          fontSize={'24px'}
          fontFamily={'Helvetica, sans-serif'}
          fontWeight={'bold'}
          ml={'3px'}
        >
          Tokamak Network Price Dashboard
        </Flex>
      </Flex>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        fontSize={'16px'}
        color="#1c1c1c"
      >
        <Link 
          target="_blank"
          rel="noopener noreferrer"
          href="https://upbit.com/exchange?code=CRIX.UPBIT.KRW-TON"
          textDecor={'none'}
          color="#1c1c1c"
          mr={'40px'}
        >
          Buy TON
        </Link>
        {/* <Link 
          target="_blank"
          rel="noopener noreferrer"
          href=""
          textDecor={'none'}
          color="#rgba(28, 28, 28, 0.50)"
        >
          Dune Dashboard
        </Link> */}
        <Text
          color={'#1C1C1C80'}
        >
          Dune Dashboard
        </Text>
      </Flex>
      
    </Flex>
  )
}