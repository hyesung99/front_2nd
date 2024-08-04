import { BellIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, BoxProps } from "@chakra-ui/react";
import { ReactElement } from "react";

interface NotificationItemProps extends BoxProps {
  title: string;
  isNotified: boolean;
  additional?: {
    left?: ReactElement;
    right?: ReactElement;
  };
}

export const NotificationItem = ({
  title,
  isNotified,
  additional,
  ...boxProps
}: NotificationItemProps) => (
  <Box
    p={1}
    my={1}
    bg={isNotified ? "red.100" : "gray.100"}
    borderRadius="md"
    fontWeight={isNotified ? "bold" : "normal"}
    color={isNotified ? "red.500" : "inherit"}
    {...boxProps}
  >
    <HStack spacing={1}>
      {additional?.left}
      <Text fontSize="sm" noOfLines={1}>
        {title}
      </Text>
      {additional?.right}
    </HStack>
  </Box>
);
