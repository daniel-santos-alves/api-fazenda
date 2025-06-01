import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma.service";
import { DashboardService } from "../dashboard.service";


@Injectable()
export class DashboardRepositoryPrisma implements DashboardRepositoryPrisma {
    constructor (private readonly prismaService: PrismaService) {}
    private readonly logger = new Logger(DashboardService.name);

    async graficoEstado() {
        this.logger.log(`Retornando dados do gráfico de pizza por estado`);
        try {
            const dados = await  this.prismaService.fazenda.groupBy({
                by: ['estado'],
                _count: {
                estado: true
                },  
            });
            return dados.map(item => ({
                estado: item.estado,
                total: Number(item._count.estado),
              }));
        } catch (error) {
            this.logger.error('Erro ao retornar dados do gráfico de pizza por estado', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async graficoCultura() {
        this.logger.log(`Retornando dados do gráfico de pizza por cultura`);
        try {
            const dados = await  this.prismaService.culturas.groupBy({
                by: ['cultura_plantada'],
                _count: {
                cultura_plantada: true
                },  
            });
            return dados.map(item => ({
                cultura: item.cultura_plantada,
                total_cultura: Number(item._count.cultura_plantada),
              }));
        } catch (error) {
            this.logger.error('Erro ao retornar dados do gráfico de pizza por cultura', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async totalFazendas()  {
        this.logger.log(`Retornando o total de fazendas cadastradas`);
        try {
            return await this.prismaService.fazenda.count();
        } catch (error) {
            this.logger.error('Erro ao retornar o total de fazendas cadastradas', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async totalHectares () {
        this.logger.log(`Retornando a área total das fazendas cadastradas`);
        try {
            const result: any[] = await this.prismaService.$queryRaw`
              SELECT SUM(tb_fazenda.area_total) FROM tb_fazenda`;
            return result[0].sum
        } catch (error) {
            this.logger.error('Erro ao retornar a área total das fazendas cadastradas', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async usoDoSolo() {
        this.logger.log(`Retornando dados do gráfico de pizza por uso do solo`);
        try {
            const area_agricultavel: any[] = await this.prismaService.$queryRaw`
                SELECT SUM(tb_fazenda.area_agricultavel) FROM tb_fazenda
                `;
            const area_vegetacao : any[] = await this.prismaService.$queryRaw`
                SELECT SUM(tb_fazenda.area_vegetacao) FROM tb_fazenda
                `;
            return { 
                area_agricultavel: area_agricultavel[0].sum,
                area_vegetacao: area_vegetacao[0].sum,
             }
        } catch (error) {
            this.logger.error('Erro ao retornar dados do gráfico de pizza por uso do solo', error.stack);
            throw new BadRequestException(error.message)
        }
    }
}
