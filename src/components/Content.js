// src/components/Screenshots.js
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

const Content = () => {
  return (
    <Container
                as="main"
                className="main-content"
                maxW="container.xl"
                bg="white"
                borderRadius="xl"
                boxShadow="xl"
                py={8}
                position="relative"
                zIndex="1"
            >

                <Box as="section" className="features">
                    <Container maxW="container.md" textAlign="center" py={12}>
                        <Heading as="h2" size="xl" color="#FFB844">
                            Bagaimana KalkuTutor Berfungsi
                        </Heading>
                        <Flex direction="column" gap={8} mt={8}>
                            <FeatureCard
                                imageSrc={require('../images/IMG_1984.PNG')}
                                title="Pembelajaran Interaktif"
                                description="Soalan dari anda dan kita selesaikan bersama-sama."
                            />
                            <FeatureCard
                                imageSrc={require('../images/IMG_1987.PNG')}
                                title="Panduan Langkah demi Langkah"
                                description="Berinteraksi dengan anda langkah-langkah yang perlu bagi menyelesaikan soalan"
                            />
                            <FeatureCard
                                imageSrc={require('../images/IMG_1985.PNG')}
                                title="Mendorong Anak Anda Berifikir"
                                description="Menerangkan peraturan asas bagi kaedah penyelesaian yang diberikan"
                            />
                        </Flex>
                    </Container>
                </Box>


                {/* <Box as="section" className="testimonials">
                    <Container maxW="container.md" textAlign="center" py={12}>
                        <Heading as="h2" size="xl" color="#FFB844">
                            Pendapat Pengguna Kami
                        </Heading>
                        <Flex mt={8} direction="column" alignItems="center">
                            <Box>
                                <Image
                                    src="/testimonial1.jpg"
                                    alt="Pengguna 1"
                                    w="100px"
                                    h="100px"
                                    rounded="full"
                                />
                                <Text mt={4}>
                                    "KalkuTutor telah menjadikan pembelajaran matematik lebih menyeronokkan untuk anak-anak saya!"
                                </Text>
                                <Text mt={2} fontWeight="bold">
                                    Ibu Bapa A
                                </Text>
                            </Box>
                            <Box mt={12}>
                                <Image
                                    src="/testimonial2.jpg"
                                    alt="Pengguna 2"
                                    w="100px"
                                    h="100px"
                                    rounded="full"
                                />
                                <Text mt={4}>
                                    "Kemahiran matematik anak saya telah meningkat dengan ketara sejak menggunakan KalkuTutor."
                                </Text>
                                <Text mt={2} fontWeight="bold">
                                    Ibu Bapa B
                                </Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box> */}

                {/* <Box as="section" className="footer">
                    <Container maxW="container.md" textAlign="center" py={12}>
                        <Heading as="h2" size="xl" color="#FFB844">
                            Bermula dengan KalkuTutor
                        </Heading>
                        <Text mt={4}>
                            Sertai komuniti pelajar muda kami dan jelajahi pengembaraan matematik!
                        </Text>
                        <Button
                            colorScheme="orange"
                            size="lg"
                            mt={8}
                            rounded="full"
                            fontWeight="bold"
                        >
                            Sertai Sekarang
                        </Button>
                    </Container>
                </Box> */}
            </Container>
  );
};

export default Content;

function FeatureCard({ imageSrc, title, description }) {
    return (
        <Flex bg="white" p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <Image src={imageSrc} alt={title} mr={4} width="50%" />
            <Box>
                <Heading as="h3" size="lg" mb={2}>
                    {title}
                </Heading>
                <Text color="gray.600">{description}</Text>
            </Box>
        </Flex>
    );
}