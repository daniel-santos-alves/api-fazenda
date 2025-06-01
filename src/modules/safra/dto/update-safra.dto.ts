import { PartialType } from '@nestjs/mapped-types';
import { CreateSafraDto } from './create-safra.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSafraDto extends PartialType(CreateSafraDto) {
    @ApiProperty()
    @IsString()
    ano: number
}
