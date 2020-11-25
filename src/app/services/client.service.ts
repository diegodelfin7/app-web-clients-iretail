import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private firestore: AngularFirestore) {}

  createClient(client : any) {
    return this.firestore.collection('clients').add(
      client
    );
  }

  deleteClient(id : any) {
    return this.firestore.collection('clients').doc(id).delete();
  }

  getAllClients() {
    return this.firestore.collection('clients').get();
  }
}
