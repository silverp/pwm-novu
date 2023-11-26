import { Type } from 'class-transformer';
import { IsBoolean, IsDefined, IsMongoId, IsOptional, ValidateNested } from 'class-validator';

import { PreferenceChannels } from '../../../shared/dtos/preference-channels';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

export class CreateWorkflowOverrideCommand extends EnvironmentWithUserCommand {
  @IsMongoId()
  @IsDefined()
  _workflowId: string;

  @IsMongoId()
  @IsDefined()
  _tenantId: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => PreferenceChannels)
  preferenceSettings?: PreferenceChannels;
}
