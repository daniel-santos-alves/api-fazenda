import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { CreateFazendaDto, ResponseFazendaDeleteDto } from './dto/create-fazenda.dto';
import { UpdateFazendaDto } from './dto/update-fazenda.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseFazendaDto } from './dto/response-fazenda';
import { ResponseFazendaDelete } from './dto/response-fazenda-delete';

@Controller('fazenda')
export class FazendaController {
  constructor(private readonly fazendaService: FazendaService) {}

  @Post()
  @ApiOperation({ summary: 'Criando uma nova fazenda'})
  @ApiResponse({
    type: ResponseFazendaDto,
  })
  create(@Body() createFazendaDto: CreateFazendaDto) {
    return this.fazendaService.create(createFazendaDto);
  }

  @Patch(':id')
  @ApiResponse({
    type: ResponseFazendaDto,
  })
  @ApiOperation({ summary: 'Atualizando uma fazenda'})
  update(@Param('id') id: string, @Body() updateFazendaDto: UpdateFazendaDto) {
    return this.fazendaService.update(+id, updateFazendaDto);
  }

  @Delete(':id')
  @ApiResponse({
    type: ResponseFazendaDeleteDto,
  })
  @ApiOperation({ summary: 'Deletando uma fazenda'})
  remove(@Param('id') id: string) {
    return this.fazendaService.remove(+id);
  }

}
