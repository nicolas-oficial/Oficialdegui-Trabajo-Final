import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('api/edi')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Get()
    getStock(): string {
      return this.stockService.obtenerStock();
    }
}
