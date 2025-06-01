import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateProdutorDto } from "./create-produtor.dto";



export class UpdateProdutorDto extends PartialType(CreateProdutorDto) {
    @ApiProperty()
    @IsString()
    nome_produtor?: string;

    @ApiProperty()
    @IsString()
    cpf_produtor?: string;
    
    @ApiProperty()
    @IsString()
    cnpj_produtor?: string;
}

