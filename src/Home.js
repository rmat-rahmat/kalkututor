import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Stack,
    SimpleGrid,
} from '@chakra-ui/react';
import {
    Link,
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';
import PrivacyPolicy from './components/PrivacyPolicy';

function Home() {
    return (
        <Box className="App" bgGradient="linear(to-b, cyan.300, green.300)">
            <Box as="section" className="hero" marginBottom={10} display="flex" alignItems="center" justifyContent="flex-start" >
                <Image src={require('./images/iconDarker.png')} alt={"title"} width="20%" />
                <Box textAlign="left" paddingLeft={0}>
                    <Heading as="h1" size="2xl" mt={12} color="#FFB844">
                        KalkuTutor
                    </Heading>
                    <Text fontSize="xl" mt={4} color="gray.600">
                        Matematik itu sangat menyeronokkan!
                    </Text>
                    {/* <Button
                            colorScheme="orange"
                            size="lg"
                            mt={8}
                            rounded="full"
                            fontWeight="bold"
                        >
                            Mula Sekarang
                        </Button> */}
                </Box>
            </Box>
            <Flex direction="collumn" marginBottom="5" padding="2" gap={6} justifyContent="center" alignItems="center">
                <Button as={Link} to="/" colorScheme="whiteAlpha"  >Laman Utama</Button>
                <Button as={Link} to="/privacy-policy" colorScheme="whiteAlpha"  >Dasar Privasi</Button>
            </Flex>
            {/* <Box
                as="header"
                className="header"
                bgGradient="linear(to-r, #FFD700, #FFA500)"
                pb={4}
            >
                <Container maxW="container.xl">
                    <Flex
                        as="nav"
                        className="navbar"
                        align="center"
                        justify="space-between"
                        py={4}
                    >
                        <Image src={require('./images/iconDarker.png')} alt="Logo" w="100px" h="auto" />
                        <Stack direction="row" spacing={6}>
                            <Button colorScheme="whiteAlpha">Utama</Button>
                            <Button colorScheme="whiteAlpha">Ciri-ciri</Button>
                            <Button colorScheme="whiteAlpha">Testimoni</Button>
                            <Button colorScheme="whiteAlpha">Hubungi</Button>
                        </Stack>
                    </Flex>
                </Container>
            </Box> */}
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </Box>
    );
}



export default Home;
