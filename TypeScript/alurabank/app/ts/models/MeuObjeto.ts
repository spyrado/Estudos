import { Imprimivel } from '../models/Imprimivel';
import { Igualavel } from '../models/Igualavel';

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T>{}