import React, { FunctionComponent } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/core';
import { MdLock, MdPerson } from 'react-icons/md';

import AppContainer from '../../containers/AppContainer';

const Login: FunctionComponent = () => (
  <AppContainer>
    <Alert status="error" my="4">
      <AlertIcon />
      Access denied.
    </Alert>
    <Box display="flex" alignItems="center" justifyContent="center" height="80vh">
      <Box as="form" width="100%" maxWidth="400px" mx="auto">
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Box as={MdPerson} size="24px" color="gray.300" />
            </InputLeftElement>
            <Input
              name="username"
              placeholder="Username"
            />
          </InputGroup>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Box as={MdLock} size="24px" color="gray.300" />
            </InputLeftElement>
            <Input
              type="password"
              name="password"
              placeholder="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          width="100%"
          mt={4}
          variantColor="teal"
          type="submit"
        >
          Log in
        </Button>
      </Box>
    </Box>
  </AppContainer>
);

export default Login;