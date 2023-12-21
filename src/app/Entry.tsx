import { Center, Flex, useMediaQuery } from "@chakra-ui/react";
// import Header from "@/components/header/Index";
// import MobileView from "./Mobile";
// import { ApolloProvider } from "@apollo/client";
// import useConnectedNetwork from "@/hooks/network";
// import { apolloClient } from "@/apollo";
import TokamakGNB from '../components/Header';
export default function Entry({ children }: { children: React.ReactNode }) {
  // const [isMobile] = useMediaQuery("(max-width: 1200px)");

  // if (isMobile) {
  //   return (
  //     <Center h={"100vh"}>
  //       <MobileView />
  //     </Center>
  //   );
  // }

  return (
    <Flex 
      minW={'1440px'} 
      justifyContent={'start'} 
      alignItems={'center'} 
      flexDir={'column'}
      bgColor={'#fff'}
    >
      <TokamakGNB />
      <Center> {children} </Center>
    </Flex>
    // <Center h={"100vh"}>{children} />
    // <ApolloProvider client={apolloClient}>
      // {/* <Header /> */}
      // <Center h={"100vh"}>{children} />
      // <GlobalComponents /> 
    // </ApolloProvider>
  );
}
