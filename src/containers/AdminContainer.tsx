import React from 'react';
import {
  Box,
  Heading,
  useColorMode,
} from '@chakra-ui/react';

import SectionNavBtn from 'components/SectionNavBtn';
import AppContainer from 'containers/AppContainer';

interface Props {
  current: string;
}

const AdminContainer: React.FC<Props> = ({ children, current }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const navItems = [
    {
      label: 'Config',
      path: '/admin/config',
    },
    {
      label: 'Variables',
      path: '/admin/variables',
    },
    {
      label: 'Connections',
      path: '/admin/connections',
    },
    {
      label: 'Pools',
      path: '/admin/pools',
    },
    {
      label: 'XComs',
      path: '/admin/xcoms',
    },
  ];

  return (
    <AppContainer>
      <Box
        pt={4}
        mx={-4}
        px={4}
        pb="2"
        bg={isDarkMode ? 'gray.700' : 'gray.100'}
      >
        <Heading as="h1">
          <Box
            as="span"
            color={isDarkMode ? 'gray.500' : 'gray.400'}
          >
            Admin/
          </Box>
          {current}
        </Heading>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="4"
        >
          <Box as="nav">
            {navItems.map((item) => (
              <SectionNavBtn key={item.label} item={item} currentLabel={current} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box py="4">{children}</Box>
    </AppContainer>
  );
};

export default AdminContainer;