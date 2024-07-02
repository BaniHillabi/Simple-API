import { createUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly UserService :UserService){}

    @Post('create')
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto: createUserDto) {
        return this.UserService.createUser(createUserDto)
    }

    findAll() {

    }

    findById() {

    }

    update() {

    }

    remove() {

    }
}
