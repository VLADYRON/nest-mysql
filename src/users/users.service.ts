import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async all() {
        return await this.userRepository.find();
    }

    async find(id: number) {
        return await this.userRepository.findOneBy({id});
    }

    async save(user: UserDto) {
        const newUser = new User();
        newUser.createAt = new Date();
        newUser.username = user.username;
        newUser.password = user.password;
        return await this.userRepository.save(newUser);
    }

    async delete(id: number): Promise<void> {
         await this.userRepository.delete(id);
    }

    async update(id: number, user: UserDto): Promise<void> {
         await this.userRepository.update(id, user);
    }
}
