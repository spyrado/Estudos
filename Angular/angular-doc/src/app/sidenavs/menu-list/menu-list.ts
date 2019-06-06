import { Menu } from 'src/app/shared/interfaces/menu';
import { SubMenu } from 'src/app/shared/interfaces/submenu';


export interface MenuList{
  name: string;
  submenu: SubMenu[];
}