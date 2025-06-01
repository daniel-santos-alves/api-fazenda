import { Controller, Get} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseGarficoEstadoDto } from './dto/response-grafico-estado';
import { ResponseGarficoCulturaDto } from './dto/response-grafico-cultura';
import { ResponseTotalFazendasDto } from './dto/response-total-fazendas';
import { ResponseAreaTotalDto } from './dto/response-area-total';
import { ResponseUsoDoSolo } from './dto/response-uso-do-solo';


@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('grafico-estado')
  @ApiResponse({
    description: 'Dados do gráfico por estado',
    type: ResponseGarficoEstadoDto,
  })
  @ApiOperation({ summary: 'Gráfico de pizza por estado'})
  async graficoEstado() {
    return this.dashboardService.graficoEstado()
  }

  @Get('grafico-cultura')
  @ApiResponse({
    description: 'Dados do gráfico por cultura',
    type: ResponseGarficoCulturaDto,
  })
  @ApiOperation({ summary: 'Gráfico de pizza por cultura plantada'})
  async graficoCultura() {
    return this.dashboardService.graficoCultura()
  }

  @Get('total-fazendas')
  @ApiResponse({
    type: ResponseTotalFazendasDto,
  })
  @ApiOperation({ summary: 'Total de fazendas cadastradas (quantidade)'})
  async contarFazendas() {
    const total = await this.dashboardService.totalFazendas()
    return { total_fazendas: total }
  }

  @Get('area-total') 
  @ApiResponse({
    type: ResponseAreaTotalDto,
  })
  @ApiOperation({ summary: 'Total de hectares registrados (área total)'})
  async totalHectares() {
    const total = await this.dashboardService.totalHectares()
    return { area_total: total }
  }

  @Get('uso-do-solo')
  @ApiResponse({
    type: ResponseUsoDoSolo,
  })
  @ApiOperation({ summary: 'Gráfico de pizza por uso do solo (área agricultável e vegetação)' })
  async usoDoSolo() {
    return await this.dashboardService.usoDoSolo()
  }
 
}
