
import { ApiProperty } from "@nestjs/swagger";
import { CreateDashboardGarficoEstadoDto } from "./create-dashboard.dto";


export class ResponseGarficoEstadoDto {
    @ApiProperty({ type: [CreateDashboardGarficoEstadoDto] })
    dados: {
        estado: string;
        total: number;
    }[];
}