import { MicrorRegiao } from './microrregiao';

export interface Municipio {
  id: number;
  nome: string;
  microrregiao: MicrorRegiao;
}