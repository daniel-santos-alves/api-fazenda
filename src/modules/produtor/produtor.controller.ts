import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutorService } from './produtor.service';
import { CreateProdutorDto, ResponseProdutorDeleteDto } from './dto/create-produtor.dto';
import { UpdateProdutorDto } from './dto/update-produtor.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseProdutorDto } from './dto/response-produtor';

@Controller('produtor')
export class ProdutorController {
  constructor(private readonly produtorService: ProdutorService) {}

  @Post()
  @ApiOperation({ summary: 'Criando um novo produtor'})
  @ApiResponse({
    type: ResponseProdutorDto,
  })
  create(@Body() createProdutorDto: CreateProdutorDto) {
    return this.produtorService.create(createProdutorDto);
  }

  @Patch(':id')
  @ApiResponse({
    type: ResponseProdutorDto,
  })
  @ApiOperation({ summary: 'Atualizando um produtor'})
  update(@Param('id') id: string, @Body() updateProdutorDto: UpdateProdutorDto) {
    return this.produtorService.update(+id, updateProdutorDto);
  }

  @Delete(':id')
  @ApiResponse({
    type: ResponseProdutorDeleteDto,
  })
  @ApiOperation({ summary: 'Deletando um produtor'})
  remove(@Param('id') id: string) {
    return this.produtorService.remove(+id);
  }
}
