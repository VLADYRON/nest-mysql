import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.all();
    }

    @Get(":id")
    findOne(@Param("id") id:number): Promise<User>{
        return this.userService.find(id);
    }

    @Post()
    create(@Body() userDto:UserDto):Promise<User>{
        return this.userService.save(userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
      return this.userService.delete(id);
    }

    @Put(':id')
    update(@Body() userDto:UserDto, @Param('id') id: number): Promise<void> {
      return this.userService.update(id, userDto);
    }
   
}
