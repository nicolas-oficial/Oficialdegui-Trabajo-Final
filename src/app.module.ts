import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndumentariaController } from './indumentaria/indumentaria.controller';
import { IndumentariaService } from './indumentaria/indumentaria.service';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';

@Module({
  imports: [],
  controllers: [AppController, IndumentariaController, StockController],
  providers: [AppService, IndumentariaService, StockService],
})
export class AppModule {}
