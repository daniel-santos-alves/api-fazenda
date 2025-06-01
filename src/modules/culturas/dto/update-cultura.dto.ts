import { PartialType } from '@nestjs/mapped-types';
import { CreateCulturaDto } from './create-cultura.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCulturaDto extends PartialType(CreateCulturaDto) {
    @ApiProperty()
    @IsString()
    cultura_plantada?: string
}
