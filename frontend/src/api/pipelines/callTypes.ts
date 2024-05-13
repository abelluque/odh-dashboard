import {
  GetPipeline,
  DeletePipeline,
  ListPipelineRuns,
  ListPipelineRunJobs,
  ListPipelines,
  UploadPipeline,
  UpdatePipelineRunJob,
  GetPipelineRun,
  UpdatePipelineRun,
  ListExperiments,
  CreateExperiment,
  GetExperiment,
  CreatePipelineRun,
  CreatePipelineRunJob,
  GetPipelineRunJob,
  DeletePipelineRunJob,
  DeletePipelineRun,
  UploadPipelineVersion,
  GetPipelineVersion,
  DeletePipelineVersion,
  ListPipelineVersions,
  CreatePipelineAndVersion,
  CreatePipelineVersion,
  UpdateExperiment,
  DeleteExperiment,
} from '~/concepts/pipelines/types';
import { K8sAPIOptions } from '~/k8sTypes';

// TODO: Determine if there is a better typing than `any` -- the caller makes the proper type
// eslint-disable-next-line
type KubeflowSpecificAPICall = (opts: K8sAPIOptions, ...args: any[]) => Promise<unknown>;
type KubeflowAPICall<ActualCall extends KubeflowSpecificAPICall> = (hostPath: string) => ActualCall;

export type CreatePipelineVersionAPI = KubeflowAPICall<CreatePipelineVersion>;
export type CreatePipelineAndVersionAPI = KubeflowAPICall<CreatePipelineAndVersion>;
export type CreateExperimentAPI = KubeflowAPICall<CreateExperiment>;
export type CreatePipelineRunAPI = KubeflowAPICall<CreatePipelineRun>;
export type CreatePipelineRunJobAPI = KubeflowAPICall<CreatePipelineRunJob>;
export type GetExperimentAPI = KubeflowAPICall<GetExperiment>;
export type GetPipelineAPI = KubeflowAPICall<GetPipeline>;
export type GetPipelineRunAPI = KubeflowAPICall<GetPipelineRun>;
export type GetPipelineRunJobAPI = KubeflowAPICall<GetPipelineRunJob>;
export type GetPipelineVersionAPI = KubeflowAPICall<GetPipelineVersion>;
export type DeletePipelineAPI = KubeflowAPICall<DeletePipeline>;
export type DeletePipelineRunAPI = KubeflowAPICall<DeletePipelineRun>;
export type DeletePipelineRunJobAPI = KubeflowAPICall<DeletePipelineRunJob>;
export type DeletePipelineVersionAPI = KubeflowAPICall<DeletePipelineVersion>;
export type DeleteExperimentAPI = KubeflowAPICall<DeleteExperiment>;
export type ListExperimentsAPI = KubeflowAPICall<ListExperiments>;
export type ListPipelinesAPI = KubeflowAPICall<ListPipelines>;
export type ListPipelinesRunAPI = KubeflowAPICall<ListPipelineRuns>;
export type ListPipelinesRunJobAPI = KubeflowAPICall<ListPipelineRunJobs>;
export type ListPipelineVersionsAPI = KubeflowAPICall<ListPipelineVersions>;
export type UpdatePipelineRunAPI = KubeflowAPICall<UpdatePipelineRun>;
export type UpdatePipelineRunJobAPI = KubeflowAPICall<UpdatePipelineRunJob>;
export type UpdateExperimentAPI = KubeflowAPICall<UpdateExperiment>;
export type UploadPipelineAPI = KubeflowAPICall<UploadPipeline>;
export type UploadPipelineVersionAPI = KubeflowAPICall<UploadPipelineVersion>;
