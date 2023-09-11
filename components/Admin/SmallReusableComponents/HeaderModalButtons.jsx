import { Button, HStack, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { PageHeading } from "./Heading";
import { AddModal } from "../Category/Modal/AddModal";


const HeaderModalButtons = ({ heading, button1, button2 }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedButton, setSelectedButton] = useState('');

    const handleButtonClick = (button) => {
        console.log(button);
        setSelectedButton(button);
        onOpen();
    };

    return (
        <HStack justifyContent="space-between">
            <PageHeading text={heading} />
            <Stack direction={{ base: 'column', md: 'row' }}>
                {button1 ? <Button onClick={() => handleButtonClick(button1)} size={{ base: 'sm', md: 'md' }} colorScheme="teal">{button1}</Button> : null}
                {button2 ? <Button onClick={() => handleButtonClick(button2)} size={{ base: 'sm', md: 'md' }} colorScheme="teal">{button2}</Button> : null}
            </Stack>
            {/* Pass selectedButton to the AddModal */}
            <AddModal isOpen={isOpen} onClose={onClose} selectedButton={selectedButton} />
        </HStack>
    );
}

export { HeaderModalButtons };