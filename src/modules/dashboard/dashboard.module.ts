import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { DASHBOARD_REPOSITORY } from './repositories/dashboard.interface';
import { DashboardRepositoryPrisma } from './repositories/dashboard.repository';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService,
    {
      provide: DASHBOARD_REPOSITORY,
      useClass: DashboardRepositoryPrisma,
    }
  ],
})
export class DashboardModule {}
