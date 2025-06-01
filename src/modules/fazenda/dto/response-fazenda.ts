import { ApiProperty } from "@nestjs/swagger";
import { CreateFazendaDto } from "./create-fazenda.dto";


export class ResponseFazendaDto extends CreateFazendaDto{
    @ApiProperty()
    id_fazenda: number;
}