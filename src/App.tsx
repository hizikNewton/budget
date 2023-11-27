import {
  Box,
  Flex,
  Icon,
  Stat,
  StatNumber,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Naira } from "./assets/icons";

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

        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
      <footer />
    </Box>
  );
}

export default App;
