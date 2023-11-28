import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stat,
  StatNumber,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MenuIcon, Naira } from "./assets/icons";

function App() {
  return (
    <Box
      className="App"
      w={"100vw"}
      h={"100vh"}
      py={"20px"}
      paddingX={"30px"}
      backgroundColor={"#FCFCFC"}
    >
      <header className="App-header">
        <Box>
          <Text>Budget</Text>
        </Box>
      </header>
      <main>
        <Flex>
          <Icon>
            <Naira />
          </Icon>
          <Text>Monthly Budget</Text>
        </Flex>
        <Stat h={"52px"} borderRadius={"10px"} backgroundColor={"#FFF"}>
          <StatNumber>₦120,000</StatNumber>
        </Stat>
        <Flex justifyContent={"space-between"} >
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              width="4px"
              bg="green.500"
              borderRadius="1px"
            />
            <TabPanels >
              <TabPanel >
                <Center>
                  <VStack>
                    <CircularProgress sx={{
                      borderRadius: "50%",
                      border: "10px solid rgba(4, 102, 200, 0.40)",
                      boxShadow: "inset 0 0px 20px #0466C866"
                    }} color="#0466C8" thickness={"8px"} capIsRound={true} value={45} size={"150px"} >
                      <CircularProgressLabel>45%</CircularProgressLabel>
                    </CircularProgress>
                    <Box>Amount spent so far</Box>
                    <Box>₦50,000/₦120,000</Box>
                  </VStack>
                </Center>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Menu>
            <MenuButton h={"fit-content"}><Icon ><MenuIcon /></Icon></MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Container>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />

            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
          </Grid>
        </Container>
      </main>
      <footer>

      </footer>
    </Box>
  );
}

export default App;
