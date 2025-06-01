import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { CreateCulturaDto, ResponseCulturasDeleteDto } from './dto/create-cultura.dto';
import { UpdateCulturaDto } from './dto/update-cultura.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseCulturaDto } from './dto/response-cultura';

@Controller('culturas')
export class CulturasController {
  constructor(private readonly culturasService: CulturasService) {}

  @Post()
  @ApiOperation({ summary: 'Criando uma nova cultura'})
  @ApiResponse({
    type: ResponseCulturaDto,
  })
  create(@Body() createCulturaDto: CreateCulturaDto) {
    return this.culturasService.create(createCulturaDto);
  }

  @Patch(':id')
  @ApiResponse({
    type: ResponseCulturaDto,
  })
  @ApiOperation({ summary: 'Atualizando uma cultura'})
  update(@Param('id') id: string, @Body() updateCulturaDto: UpdateCulturaDto) {
    return this.culturasService.update(+id, updateCulturaDto);
  }

  @Delete(':id')
  @ApiResponse({
    type: ResponseCulturasDeleteDto,
  })
  @ApiOperation({ summary: 'Deletando uma cultura'})
  remove(@Param('id') id: string) {
    return this.culturasService.remove(+id);
  }
}
