import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'search-page', loadChildren: './tabs/search-page/search-page.module#SearchPagePageModule' },
  { path: 'chat', loadChildren: './tabs/chat/chat.module#ChatPageModule' },
  { path: 'calendar', loadChildren: './tabs/calendar/calendar.module#CalendarPageModule' },
  { path: 'notifications', loadChildren: './tabs/notifications/notifications.module#NotificationsPageModule' },
  { path: 'settings', loadChildren: './tabs/settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
