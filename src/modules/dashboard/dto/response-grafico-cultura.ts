import { ApiProperty } from "@nestjs/swagger";
import { CreateDashboardGarficoCulturaDto } from "./create-dashboard.dto";


export class ResponseGarficoCulturaDto {
    @ApiProperty({ type: [CreateDashboardGarficoCulturaDto] })
    dados: {
        cultura: string;
        total_cultura: number;
    }[];
}