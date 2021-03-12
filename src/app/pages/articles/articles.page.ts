import { Component, OnInit } from '@angular/core';

// 1) Importa dependÃªncias
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  // 3) Cria atributos
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(

    // 2) Injeta dependÃªncias
    private firestore: AngularFirestore
  ) {

    // 4) ObtÃ©m dados do database
    this.itemsCollection = firestore.collection<any>('articles');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() { }
}