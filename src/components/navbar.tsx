import { Flex, Text } from "@radix-ui/themes";
import { ProfileDropdown } from "./profile-dropdown";

const Navbar = () => {
  return (
    <Flex
      justify="between"
      align="center"
      py="4"
      px="8"
      className="bg-white border-b border-gray-1"
      mb="8"
    >
      <Text weight={"medium"} size="6">
        Index Track
      </Text>
      <ProfileDropdown />
    </Flex>
  );
};

export { Navbar };
