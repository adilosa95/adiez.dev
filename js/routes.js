import {Links} from '../pages/links.js'
import {Main} from '../pages/main.js'

export const routes = {
    '/': Main,
    '/links': Links,
    '/p/:id': Links
  };
