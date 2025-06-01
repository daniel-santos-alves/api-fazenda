import { ApiProperty } from "@nestjs/swagger";

export class CreateDashboardDto {}

export class CreateDashboardGarficoEstadoDto {
    @ApiProperty()
    estado: string;

    @ApiProperty()
    total: number;
}

export class CreateDashboardGarficoCulturaDto {
    @ApiProperty()
    cultura: string;

    @ApiProperty()
    total_cultura: number;
}

export class CreateDashboarTotalFazendasdDto {
    @ApiProperty()
    total_fazendas: number;
}

export class CreateDashboardAreaTotalDto {
    @ApiProperty()
    area_total: number;
}

export class CreateDashboardUsoDoSolo {
    @ApiProperty()
    area_agricultavel: number;

    @ApiProperty()
    area_vegetacao: number;
}
