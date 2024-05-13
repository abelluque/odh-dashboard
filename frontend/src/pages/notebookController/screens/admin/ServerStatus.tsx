import * as React from 'react';
import { Button } from '@patternfly/react-core';
import { useUser } from '~/redux/selectors';
import { NotebookControllerContext } from '~/pages/notebookController/NotebookControllerContext';
import { NotebookControllerTabTypes } from '~/pages/notebookController/const';
import { AdminViewUserData } from './types';

type ServerStatusProps = {
  data: AdminViewUserData['serverStatus'];
  username: AdminViewUserData['name'];
};

const ServerStatus: React.FC<ServerStatusProps> = ({ data, username }) => {
  const { setImpersonating, setCurrentAdminTab } = React.useContext(NotebookControllerContext);
  const { username: stateUser } = useUser();
  const forStateUser = stateUser === username;

  const onClickServerAction = () => {
    if (forStateUser) {
      // Starting your own server, no need to impersonate
      setCurrentAdminTab(NotebookControllerTabTypes.SERVER);
      return;
    }
    setImpersonating({ notebook: data.notebook, isRunning: data.isNotebookRunning }, username);
  };

  let buttonText = '';
  if (!data.isNotebookRunning) {
    buttonText = forStateUser ? 'Start your server' : 'Start server';
  } else {
    buttonText = forStateUser ? 'View your server' : 'View server';
  }

  return (
    <Button
      data-id={`server-button-${username}`}
      data-testid="server-button"
      variant="link"
      isInline
      onClick={onClickServerAction}
    >
      {buttonText}
    </Button>
  );
};

export default ServerStatus;
