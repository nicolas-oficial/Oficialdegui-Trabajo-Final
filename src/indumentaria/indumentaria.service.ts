import { Injectable } from '@nestjs/common';

@Injectable()
export class IndumentariaService {

    getIndumentaria():string {
        return 'Remeras, Pantalones, Camperas.';
    }

    postIndumentaria():string {
        return 'Remeras: $4000, Pantalones: $7000, Camperas: $15000.'
    }
}

