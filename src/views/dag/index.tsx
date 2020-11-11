import React, { FunctionComponent, useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import { useGet } from 'restful-react';
import humps from 'humps';
import {
  Button,
  Box,
  Code,
  List,
  ListItem,
  Tag,
} from '@chakra-ui/core';

import drawChart from './drawChart';
import DagContainer from '../../containers/DagContainer';
import SidebarTask from './SidebarTask';

import type { Dag as DagType, Task } from '../../interfaces';

const Dag: FunctionComponent = () => {
  const { match: { params: { dagId } } } = useReactRouter();
  const [sidebarTask, setSidebarTask] = useState(null);

  const { data: dag }: { data: DagType } = useGet({
    path: `dags/${dagId}`,
    resolve: (d) => humps.camelizeKeys(d),
  });

  const { data: taskData } = useGet({
    path: `dags/${dagId}/tasks`,
    resolve: (d) => humps.camelizeKeys(d),
  });

  useEffect(() => {
    drawChart(400, 600);
  }, []);

  const setTask = (task: Task) => {
    setSidebarTask(task);
  }

  if (!dag) return null;

  return (
    <DagContainer current="overview">
      <List styleType="none" mt="8">
        {dag && dag.description && (
          <ListItem>
            Description:
            {' '}
            {dag.description}
          </ListItem>
        )}
        {dag && dag.owners && (
          <ListItem>
            Owner(s):
            {' '}
            {dag.owners.join(', ')}
          </ListItem>
        )}
        <ListItem>{dag && dag.isPaused}</ListItem>
        {dag && dag.fileloc && (
          <ListItem>
            File Location:
            {' '}
            <Code>{dag.fileloc}</Code>
          </ListItem>
        )}
        {dag && dag.fileToken && (
          <ListItem>
            File Token:
            {' '}
            <Code>{dag.fileToken}</Code>
          </ListItem>
        )}
        {dag && dag.tags && (
          <ListItem>
            Tags:
            {' '}
            {dag.tags.map((tag) => (
              <Tag key={tag.name} mr={1}>{tag.name}</Tag>
            ))}
          </ListItem>
        )}
      </List>
      {taskData && taskData.tasks && taskData.tasks.map((task: Task) => (
        <div key={task.taskId}>
          <Button
            onClick={() => setTask(task)}
            mt={4}
            variant="outline"
          >
            {task.taskId}
          </Button>
        </div>
      ))}
      <Box id="chart" mt={4} />
      <SidebarTask task={sidebarTask} />
    </DagContainer>
  );
};

export default Dag;