import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '应用概览',
    icon: 'nb-home',
    link: '/pages/echarts',
    home: true,
  },
  {
    title: '数据分析',
    group: true,
  },
  {
    title: '单个APP',
    icon: 'nb-keypad',
    link: '/pages/maps',
    children: [
      {
        title: '单个APP概览',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'APP版本演化分析',
        link: '/pages/maps/leaflet',
      },
      {
        title: '用户活跃分析',
        link: '/pages/maps/bubble',
      },
      {
        title: '日使用时长分析',
        link: '/pages/ui-features/modals',
      },
      {
        title: '保留率分析',
        link: '/pages/ui-features/typography',
      },
      {
        title: '使用时段分析',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: '版本应用情况',
        link: '/pages/ui-features/tabs',
      },
      {
        title: '其他',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: '用户分析',
    icon: 'nb-compose',
    children: [
      {
        title: '用户概览',
        link: '/pages/user/all',
      },
      {
        title: '日使用手机时长分析',
        link: '/pages/user/time',
      },
      {
        title: 'APP使用状况统计',
        link: '/pages/user/status',
      },
      {
        title: '日使用手机次数分析',
        link: '/pages/user/number',
      },
      {
        title: '兴趣分布分析',
        link: '/pages/user/interest',
      },
      {
        title: 'APP使用历史',
        link: '/pages/user/history',
      },
    ],
  },
  {
    title: '用户构成',
    icon: 'nb-gear',
    children: [
      {
        title: '用户构成概览',
        link: '/pages/users/all',
      }, {
        title: '用户兴趣分布',
        link: '/pages/users/interest',
      }, {
        title: '用户地域分布',
        link: '/pages/users/area',
      }, {
        title: '用户使用手机时长分段',
        link: '/pages/users/segment',
      }, {
        title: '用户使用手机时段',
        link: '/pages/users/interval',
      },
    ],
  },
  {
    title: '终端分析',
    icon: 'nb-location',
    children: [
      {
        title: 'Android系统版本',
        link: '/pages/maps/gmaps',
      },
      {
        title: '设备联网状态',
        link: '/pages/maps/leaflet',
      },
      {
        title: '设备品牌',
        link: '/pages/maps/bubble',
      },
      {
        title: '设备型号',
        link: '/pages/maps/bubble2',
      },
      {
        title: '设备分辨率',
        link: '/pages/maps/bubble2',
      },
      {
        title: '设备地理位置',
        link: '/pages/maps/bubble2',
      },
    ],
  },
];
