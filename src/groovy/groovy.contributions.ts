'use strict';

import { registerLanguage } from '../_.contribution';

registerLanguage({
  id: 'Jenkinsfile',
  extensions: ['.jenkinsfile'],
  aliases: ['Jenkinsfile'],
  mimetypes: ['text/plain'],
  loader: () => import('./groovy') as Promise<any>,
});
