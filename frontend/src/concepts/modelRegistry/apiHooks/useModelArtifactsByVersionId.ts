import * as React from 'react';
import useFetchState, {
  FetchState,
  FetchStateCallbackPromise,
  NotReadyError,
} from '~/utilities/useFetchState';
import { ModelArtifactList } from '~/concepts/modelRegistry/types';
import { useModelRegistryAPI } from '~/concepts/modelRegistry/context/ModelRegistryContext';

const useModelArtifactsByVersionId = (modelVersionId?: string): FetchState<ModelArtifactList> => {
  const { api } = useModelRegistryAPI();
  const callback = React.useCallback<FetchStateCallbackPromise<ModelArtifactList>>(
    (opts) => {
      if (!modelVersionId) {
        return Promise.reject(new NotReadyError('No model registeredModel id'));
      }
      return api.getModelArtifactsByModelVersion(opts, modelVersionId);
    },
    [api, modelVersionId],
  );

  return useFetchState(
    callback,
    { items: [], size: 0, pageSize: 0, nextPageToken: '' },
    { initialPromisePurity: true },
  );
};

export default useModelArtifactsByVersionId;
