import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsCNPJ } from "../../../validators/is-cnpj.decorator";
import { IsCPF } from "../../../validators/is_cpf.decorator";


export class CreateProdutorDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nome_produtor: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsCPF({ message: 'CPF inválido' })
    cpf_produtor?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsCNPJ({ message: 'CNPJ inválido' })
    cnpj_produtor?: string;
}

export class ResponseProdutorDeleteDto{
    @ApiProperty()
    id_produtor: number;

    @ApiProperty()
    deleted: boolean;
}
