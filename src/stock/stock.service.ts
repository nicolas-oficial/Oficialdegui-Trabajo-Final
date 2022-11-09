import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {

    obtenerStock(): string {
        return 'Hoy 30% de descuento.';
      }
}
