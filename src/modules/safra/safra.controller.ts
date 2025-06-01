import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SafraService } from './safra.service';
import { CreateSafraDto, ResponseSafraDeleteDto } from './dto/create-safra.dto';
import { UpdateSafraDto } from './dto/update-safra.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseSafraDto } from './dto/response-safra';

@Controller('safra')
export class SafraController {
  constructor(private readonly safraService: SafraService) {}

  @Post()
  @ApiOperation({ summary: 'Criando uma nova safra'})
  @ApiResponse({
    type: ResponseSafraDto,
  })
  create(@Body() createSafraDto: CreateSafraDto) {
    return this.safraService.create(createSafraDto);
  }

  @Patch(':id')
  @ApiResponse({
    type: ResponseSafraDto,
  })
  @ApiOperation({ summary: 'Atualizando uma safra'})
  update(@Param('id') id: string, @Body() updateSafraDto: UpdateSafraDto) {
    return this.safraService.update(+id, updateSafraDto);
  }

  @Delete(':id')
  @ApiResponse({
    type: ResponseSafraDeleteDto,
  })
  @ApiOperation({ summary: 'Deletando uma safra'})
  remove(@Param('id') id: string) {
    return this.safraService.remove(+id);
  }
}
