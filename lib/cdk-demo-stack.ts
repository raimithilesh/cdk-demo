import { Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
//import { MyPipelineAppStage } from './stage';

export class DevopsDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'TestPipeline1',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('raimithilesh/cdk-demo', 'main'),
        commands: ['npm ci', 
                   'npm run build', 
                   'npx cdk synth']
      })
    });

  }
}