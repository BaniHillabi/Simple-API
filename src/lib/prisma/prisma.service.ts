import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    private readonly logger = new Logger(PrismaService.name)
    async onModuleInit() {
        await this.$connect()
        .then(() => {
            console.log(`Connected to database`)  
        })
        .catch((e) => {
            this.logger.log(e)
        })
    }
}
