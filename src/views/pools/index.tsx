import React, { FunctionComponent } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorMode,
} from '@chakra-ui/react';

import { usePools } from 'api';
import AdminContainer from 'containers/AdminContainer';

import type { Pool } from 'interfaces';

const Pools: FunctionComponent = () => {
  const { data, error } = usePools();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const oddStyle = { backgroundColor: isDarkMode ? 'gray.900' : 'gray.50' };
  const hoverStyle = { backgroundColor: isDarkMode ? 'gray.700' : 'gray.100' };

  return (
    <AdminContainer current="Pools">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Slots</Th>
            <Th>Running Slots</Th>
            <Th>Queued Slots</Th>
          </Tr>
        </Thead>
        <Tbody>
          {status === 'loading' && (
            <Tr>
              <Td colSpan={2}>Loading…</Td>
            </Tr>
          )}
          {data && data.pools.length === 0 && (
            <Tr>
              <Td colSpan={2}>No pools added.</Td>
            </Tr>
          )}
          {data && data.pools.map((p: Pool) => (
            <Tr key={p.name} _odd={oddStyle} _hover={hoverStyle}>
              <Td>{p.name}</Td>
              <Td>{p.slots}</Td>
              <Td>{p.usedSlots}</Td>
              <Td>{p.queuedSlots}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </AdminContainer>
  );
};

export default Pools;
