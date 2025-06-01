import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCulturaDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cultura_plantada: string
}

export class ResponseCulturasDeleteDto {
    @ApiProperty()
    id_cultura: number; 
    
    @ApiProperty()
    deleted: boolean;
}