import { Controller, Get, Post } from '@nestjs/common';
import { IndumentariaService } from './indumentaria.service';

@Controller('indumentaria')
export class IndumentariaController {
    constructor(private readonly indumentariaService: IndumentariaService) {}

    @Get()
    getIndumentaria():string {
        return this.indumentariaService.getIndumentaria();
    }

    @Post()
    postIndumentaria():string {
        return this.indumentariaService.postIndumentaria();
    } 


}

   