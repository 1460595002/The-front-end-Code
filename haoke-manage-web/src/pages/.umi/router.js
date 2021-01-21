import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'E:/q-Code/ReactCode/haoke-manage-web/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User/Login'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": dynamic({ loader: () => import('../User/Register'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": dynamic({ loader: () => import('../User/RegisterResult'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "exact": true
      },
      {
        "path": "/house",
        "name": "house",
        "icon": "home",
        "routes": [
          {
            "path": "/house/resource",
            "name": "resource",
            "component": dynamic({ loader: () => import('../haoke/House/Resource'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/house/addResource",
            "name": "addResource",
            "component": dynamic({ loader: () => import('../haoke/House/AddResource'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/house/kanfang",
            "name": "kanfang",
            "component": dynamic({ loader: () => import('../haoke/House/KanFang'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/house/zufang",
            "name": "zufang",
            "component": dynamic({ loader: () => import('../haoke/House/ZuFang'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/fangdong",
        "name": "fangdong",
        "icon": "key",
        "routes": [
          {
            "path": "/fangdong/list",
            "name": "list",
            "component": dynamic({ loader: () => import('../haoke/FangDong/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/users",
        "name": "users",
        "icon": "user",
        "routes": [
          {
            "path": "/users/list",
            "name": "list",
            "component": dynamic({ loader: () => import('../haoke/Users/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/heyue",
        "name": "heyue",
        "icon": "file-text",
        "routes": [
          {
            "path": "/heyue/list",
            "name": "list",
            "component": dynamic({ loader: () => import('../haoke/HeYue/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/news",
        "name": "news",
        "icon": "message",
        "routes": [
          {
            "path": "/news/list",
            "name": "list",
            "component": dynamic({ loader: () => import('../haoke/News/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/qa",
        "name": "qa",
        "icon": "question-circle",
        "routes": [
          {
            "path": "/news/list",
            "name": "list",
            "component": dynamic({ loader: () => import('../haoke/News/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/finance",
        "name": "finance",
        "icon": "money-collect",
        "routes": [
          {
            "path": "/finance/bill",
            "name": "bill",
            "component": dynamic({ loader: () => import('../haoke/Finance/Bill'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/finance/tixian",
            "name": "tixian",
            "component": dynamic({ loader: () => import('../haoke/Finance/TiXian'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/system",
        "name": "system",
        "icon": "laptop",
        "routes": [
          {
            "path": "/system/interface",
            "name": "interface",
            "component": dynamic({ loader: () => import('../haoke/System/Interface'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/system/dict",
            "name": "dict",
            "component": dynamic({ loader: () => import('../haoke/System/Dict'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/system/contract",
            "name": "contract",
            "component": dynamic({ loader: () => import('../haoke/System/Contract'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/dashboard",
        "redirect": "/dashboard/analysis",
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "hideChildrenInMenu": false,
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": dynamic({ loader: () => import('../Dashboard/Analysis'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "name": "monitor",
            "component": dynamic({ loader: () => import('../Dashboard/Monitor'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "name": "workplace",
            "component": dynamic({ loader: () => import('../Dashboard/Workplace'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form/basic-form",
            "name": "basicform",
            "component": dynamic({ loader: () => import('../Forms/BasicForm'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": dynamic({ loader: () => import('../Forms/StepForm'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/form/step-form",
                "name": "stepform",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step1'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step2'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step3'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Forms/AdvancedForm'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/table-list",
            "name": "searchtable",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/basic-list",
            "name": "basiclist",
            "component": dynamic({ loader: () => import('../List/BasicList'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/card-list",
            "name": "cardlist",
            "component": dynamic({ loader: () => import('../List/CardList'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/search",
            "name": "searchlist",
            "component": dynamic({ loader: () => import('../List/List'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "path": "/list/search/articles",
                "name": "articles",
                "component": dynamic({ loader: () => import('../List/Articles'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/list/search/projects",
                "name": "projects",
                "component": dynamic({ loader: () => import('../List/Projects'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/list/search/applications",
                "name": "applications",
                "component": dynamic({ loader: () => import('../List/Applications'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile/basic",
            "name": "basic",
            "component": dynamic({ loader: () => import('../Profile/BasicProfile'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/profile/advanced",
            "name": "advanced",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Profile/AdvancedProfile'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "result",
        "icon": "check-circle-o",
        "path": "/result",
        "routes": [
          {
            "path": "/result/success",
            "name": "success",
            "component": dynamic({ loader: () => import('../Result/Success'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/result/fail",
            "name": "fail",
            "component": dynamic({ loader: () => import('../Result/Error'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [
          {
            "path": "/exception/403",
            "name": "not-permission",
            "component": dynamic({ loader: () => import('../Exception/403'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/404",
            "name": "not-find",
            "component": dynamic({ loader: () => import('../Exception/404'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/500",
            "name": "server-error",
            "component": dynamic({ loader: () => import('../Exception/500'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/trigger",
            "name": "trigger",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../Exception/TriggerException'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [
          {
            "path": "/account/center",
            "name": "center",
            "component": dynamic({ loader: () => import('../Account/Center/Center'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/account/center",
                "redirect": "/account/center/articles",
                "exact": true
              },
              {
                "path": "/account/center/articles",
                "component": dynamic({ loader: () => import('../Account/Center/Articles'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/center/applications",
                "component": dynamic({ loader: () => import('../Account/Center/Applications'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/center/projects",
                "component": dynamic({ loader: () => import('../Account/Center/Projects'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/account/settings",
            "name": "settings",
            "component": dynamic({ loader: () => import('../Account/Settings/Info'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/account/settings",
                "redirect": "/account/settings/base",
                "exact": true
              },
              {
                "path": "/account/settings/base",
                "component": dynamic({ loader: () => import('../Account/Settings/BaseView'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/security",
                "component": dynamic({ loader: () => import('../Account/Settings/SecurityView'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/binding",
                "component": dynamic({ loader: () => import('../Account/Settings/BindingView'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/notification",
                "component": dynamic({ loader: () => import('../Account/Settings/NotificationView'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import('../404'), loading: require('E:/q-Code/ReactCode/haoke-manage-web/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('E:/q-Code/ReactCode/haoke-manage-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
