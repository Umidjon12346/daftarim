import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGroupMemberDto } from "./dto/create-group_member.dto";
import { UpdateGroupMemberDto } from "./dto/update-group_member.dto";
import { GroupMember } from "./models/group_member.model";

@Injectable()
export class GroupMembersService {
  constructor(
    @InjectModel(GroupMember) private groupMemberModel: typeof GroupMember
  ) {}

  create(createGroupMemberDto: CreateGroupMemberDto) {
    return this.groupMemberModel.create(createGroupMemberDto);
  }

  findAll(): Promise<GroupMember[]> {
    return this.groupMemberModel.findAll();
  }

  findOne(id: number): Promise<GroupMember | null> {
    return this.groupMemberModel.findByPk(id); 
  }

  async update(
    id: number,
    updateGroupMemberDto: UpdateGroupMemberDto
  ): Promise<GroupMember | null> {
    const updatedGroupMember = await this.groupMemberModel.update(
      updateGroupMemberDto,
      { where: { id }, returning: true }
    );
    return updatedGroupMember[1][0];
  }

  async remove(id: number) {
    const deleted = await this.groupMemberModel.destroy({
      where: { id },
    });
    if (deleted > 0) {
      return "ochib olib kettii";
    }
    return "ochirmaaa";
  }
}
