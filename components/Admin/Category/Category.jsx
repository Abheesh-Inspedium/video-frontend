import { Box, Button, ChakraProvider, FormLabel, HStack, Input, Stack, VStack, theme, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import CategoryTable from "./CategoryTable";
import { HeaderModalButtons } from "../SmallReusableComponents/HeaderModalButtons";


export default function Category() {
    return (
        <ChakraProvider theme={theme}>
            <SidebarWithHeader />
            <Box ml={{ base: 0, md: 60 }} p={4} >
                <HeaderModalButtons heading={'Category Management'} button1={'Add Category'} button2={'Add Sub Category'} />
                <SearchBar />
                <CategoryTable />
            </Box>
        </ChakraProvider>
    );
}