// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/q-Code/react-zf-umi/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('E:/q-Code/react-zf-umi/src/layouts').default,
    "routes": [
      {
        "path": "/MyTable",
        "component": require('E:/q-Code/react-zf-umi/src/pages/MyTable').default,
        "exact": true
      },
      {
        "path": "/user/add",
        "component": require('E:/q-Code/react-zf-umi/src/pages/user/UserAdd').default,
        "exact": true
      },
      {
        "path": "/user/list",
        "component": require('E:/q-Code/react-zf-umi/src/pages/user/UserList').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
