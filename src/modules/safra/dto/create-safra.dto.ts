import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateSafraDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id_fazenda: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id_culturas: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    ano: number;
}

export class ResponseSafraDeleteDto {
    @ApiProperty()
    id_safra: number;

    @ApiProperty()
    deleted: boolean;
}
