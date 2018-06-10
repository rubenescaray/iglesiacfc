import { combineReducers } from 'redux';
import home from './home_reducer';
import nosotros from './nosotros_reducer';
import notificaciones from './notificaciones_reducer';
import contacto from './contacto_reducer';
import footer from './footer_reducer';

export default combineReducers({
  home,
  nosotros,
  notificaciones,
  contacto,
  footer,
});
