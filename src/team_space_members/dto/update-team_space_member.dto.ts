import { PartialType } from '@nestjs/swagger';
import { CreateTeamSpaceMemberDto } from './create-team_space_member.dto';

export class UpdateTeamSpaceMemberDto extends PartialType(CreateTeamSpaceMemberDto) {}
