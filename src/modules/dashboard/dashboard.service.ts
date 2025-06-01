import { Inject, Injectable } from '@nestjs/common';
import { DASHBOARD_REPOSITORY } from './repositories/dashboard.interface';
import { DashboardRepositoryPrisma } from './repositories/dashboard.repository';


@Injectable()
export class DashboardService {
  constructor (
    @Inject(DASHBOARD_REPOSITORY)
    private readonly dashboardRepository: InstanceType<typeof DashboardRepositoryPrisma>
  ) {}

 
  async graficoEstado() {
    return this.dashboardRepository.graficoEstado()
  }

  async totalFazendas(): Promise<number>{
    return this.dashboardRepository.totalFazendas()
  }

  async totalHectares() {
    return this.dashboardRepository.totalHectares()
  }

  async graficoCultura() {
    return this.dashboardRepository.graficoCultura()
  }

  async usoDoSolo() {
    return this.dashboardRepository.usoDoSolo()
  }
}
