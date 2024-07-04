import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user
      .findUnique({ where: { email: data.email } })
      .then((existingUser) => {
        if (existingUser) {
          throw new BadRequestException('User already exists');
        } else {
          return this.prisma.user.create({ data });
        }
      });
  }

  getUsers() {
    return this.prisma.user.findMany();
  }

  getById(id: number) {
    return this.prisma.user.findUnique({ where: { id } }).then((result) => {
      if (!result) {
        throw new BadRequestException('User Not Found');
      } else {
        return result;
      }
    });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    const check = await this.getById(id)
    if (!check) {
      throw new HttpException('User not found', 404);
    }

    if (data && data.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email as string },
      });
      if (existingUser) {
        throw new BadRequestException('Email already exists');
      }
    } else {
      return this.prisma.user.update({ where: { id: id }, data: data });
    }
  }

  removeUser(id: number) {
    return this.prisma.user.delete({where: {id: id}})
  }
}
