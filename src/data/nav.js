export const nav = [
  { title: 'Home', href: '/' },
  {
    title: 'Users',
    children: [
      { title: 'Overview', href: '/users' },
      { title: 'Docker', href: '/users/installation/docker' },
      { title: 'Linux', href: '/users/installation/linux' },
      { title: 'macOS', href: '/users/installation/macos' },
      { title: 'Settings File', href: '/users/configuration/settings_file' },
      { title: 'First Steps', href: '/users/tutorials/first_steps' },
    ],
  },
  {
    title: 'Integrators',
    children: [
      { title: 'Overview', href: '/integrators' },
      { title: 'SDK and Protocol', href: '/integrators/sdk' },
    ],
  },
  {
    title: 'Developers',
    children: [
      { title: 'Overview', href: '/developers' },
      { title: 'Development Environment', href: '/developers/environment' },
      { title: 'Contributing Overview', href: '/developers/contributing' },
      { title: 'Report Bug', href: '/developers/contributing/report_bug' },
      { title: 'Suggest Improvement', href: '/developers/contributing/suggest_improvement' },
      { title: 'Suggest New Feature', href: '/developers/contributing/suggest_new_feature' },
    ],
  },
  {
    title: 'Roadmap',
    children: [
      { title: 'Overview', href: '/roadmap' },
      { title: 'Product Vision', href: '/roadmap/vision' },
      { title: 'Timeline', href: '/roadmap/timeline' },
    ],
  },
];
