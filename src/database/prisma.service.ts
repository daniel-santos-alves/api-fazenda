import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../prisma/generated/prisma"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor(){
        if (process.env.DATABASE_URL) {
            super({
                datasources: {
                    db: {
                        url: process.env.DATABASE_URL,
                    },
                },
            });
        } else {
            super();
        }
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}