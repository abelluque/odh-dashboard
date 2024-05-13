import * as React from 'react';
import useFetchState, {
  FetchState,
  FetchStateCallbackPromise,
  NotReadyError,
} from '~/utilities/useFetchState';
import { usePipelinesAPI } from '~/concepts/pipelines/context';
import { PipelineRunJobKFv2 } from '~/concepts/pipelines/kfTypes';

const usePipelineRunJobById = (
  pipelineRunJobId?: string,
): FetchState<PipelineRunJobKFv2 | null> => {
  const { api } = usePipelinesAPI();

  const call = React.useCallback<FetchStateCallbackPromise<PipelineRunJobKFv2 | null>>(
    (opts) => {
      if (!pipelineRunJobId) {
        return Promise.reject(new NotReadyError('No pipeline run job id'));
      }

      return api.getPipelineRunJob(opts, pipelineRunJobId);
    },
    [api, pipelineRunJobId],
  );

  return useFetchState(call, null);
};

export default usePipelineRunJobById;
