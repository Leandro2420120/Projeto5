import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Define a pÃ¡gina inicial do app como 'articles'
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },

  // PÃ¡gina de erro 404
  // DEVE SER SEMPRE A ÃšLTIMA ROTA
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}