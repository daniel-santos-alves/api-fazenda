import { ApiProperty } from "@nestjs/swagger";
import { CreateProdutorDto } from "./create-produtor.dto";

export class ResponseProdutorDto extends CreateProdutorDto{
    @ApiProperty()
    id_produtor: number;
}