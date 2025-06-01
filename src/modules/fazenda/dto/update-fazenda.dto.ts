
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateFazendaDto } from './create-fazenda.dto';

export class UpdateFazendaDto extends PartialType(CreateFazendaDto) {
    @ApiProperty()
    @IsString()
    nome_fazenda?: string;

    @ApiProperty()
    @IsNumber()
    area_total?: number;

    @ApiProperty()
    @IsNumber()
    area_agricultavel?: number;
    
    @ApiProperty()
    @IsNumber()
    area_vegetacao?: number;

    @ApiProperty()
    @IsString()
    cidade?: string;
    
    @ApiProperty()
    @IsString()
    estado?: string;
}
