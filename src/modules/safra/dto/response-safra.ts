import { ApiProperty } from "@nestjs/swagger";
import { CreateSafraDto } from "./create-safra.dto";


export class ResponseSafraDto extends CreateSafraDto{
    @ApiProperty()
    id_safra: number;
}