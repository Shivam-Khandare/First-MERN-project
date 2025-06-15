import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: 'column',
          sm: 'row'
        }}
      >

        <Text
          bgGradient='linear(to-l,rgb(40, 202, 202),rgb(168, 61, 197))'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size='18' /> : <LuSun size='18' />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar