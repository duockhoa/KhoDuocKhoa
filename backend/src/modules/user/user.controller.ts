import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get() // -> /users
  index() {
    return this.userService.getUsers();
  }
  @Get(':id')
  show(@Param('id') id: string) {
    return 'User details' + id;
  }

  @Post()
  create() {
    return 'User created!';
  }
  @Delete()
  remove() {
    return 'User deleted!';
  }
  @Put()
  update() {
    return 'User updated!';
  }
}
