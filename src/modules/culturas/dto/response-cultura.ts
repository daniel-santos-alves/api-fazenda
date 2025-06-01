import { ApiProperty } from "@nestjs/swagger";
import { CreateCulturaDto } from "./create-cultura.dto";

export class ResponseCulturaDto extends CreateCulturaDto{
    @ApiProperty()
    id_culturas: number;
}