import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateFazendaDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id_produtor: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nome_fazenda: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    area_total: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    area_agricultavel: number;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    area_vegetacao: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cidade: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    estado: string;
}

export class ResponseFazendaDeleteDto{
    @ApiProperty()
    id_fazenda: number;

    @ApiProperty()
    deleted: boolean;
}
