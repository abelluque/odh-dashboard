import * as React from 'react';
import { Button } from '@patternfly/react-core';
import { usePipelinesAPI } from '~/concepts/pipelines/context';
import { PipelineKFv2, PipelineVersionKFv2 } from '~/concepts/pipelines/kfTypes';
import PipelineVersionImportModal from '~/concepts/pipelines/content/import/PipelineVersionImportModal';

type ImportPipelineVersionButtonProps = {
  selectedPipeline: PipelineKFv2 | null;
  onCreate?: (pipelineVersion: PipelineVersionKFv2, pipeline?: PipelineKFv2 | null) => void;
} & Omit<React.ComponentProps<typeof Button>, 'onClick'>;

const ImportPipelineVersionButton: React.FC<ImportPipelineVersionButtonProps> = ({
  selectedPipeline,
  onCreate,
  children,
  ...buttonProps
}) => {
  const { apiAvailable, refreshAllAPI } = usePipelinesAPI();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        {...buttonProps}
        isDisabled={!apiAvailable || buttonProps.isDisabled}
        onClick={() => setOpen(true)}
      >
        {children || 'Upload new version'}
      </Button>
      {open && (
        <PipelineVersionImportModal
          existingPipeline={selectedPipeline}
          onClose={(pipelineVersion, pipeline) => {
            setOpen(false);
            if (pipelineVersion) {
              if (onCreate) {
                onCreate(pipelineVersion, pipeline);
              }
              refreshAllAPI();
            }
          }}
        />
      )}
    </>
  );
};

export default ImportPipelineVersionButton;
