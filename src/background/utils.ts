
/* IMPORT */

import * as _ from 'lodash';

/* UTILS */

const Utils = {

  tab2id ( tab?: number | chrome.tabs.Tab ) {

    return ( _.isObject ( tab ) && !_.isNumber ( tab ) && !_.isUndefined ( tab ) ? tab.id : tab ) as number; //TSC;

  },

  window2id ( window?: number | chrome.windows.Window ) {

    return ( _.isObject ( window ) && !_.isNumber ( window ) && !_.isUndefined ( window ) ? window.id : window ) as number; //TSC

  }

};

/* EXPORT */

export default Utils;
