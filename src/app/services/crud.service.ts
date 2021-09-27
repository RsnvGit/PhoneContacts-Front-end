import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

constructor(private http:HttpClient) { }
  url='http://localhost:38509'
  addContact(obj:any) {
    console.log(obj)
    return this.http.post(this.url+'/api/Contacts/CreateContact',obj)

  }

  getContacts(){
    
    return this.http.get(this.url+'/api/Contacts')
    
  }
  getIgnoredContacts(){
    return this.http.get(this.url+'/Ignored')
  }

  updateContact(obj:any){
    
    return this.http.put(this.url+'/api/Contacts/UpdateContact',obj)
  }
  removeContact(id:number){
    
     return this.http.delete(this.url+'/api/Contacts/Delete/'+id);
     
  }
 

  ignoreContact(id:number,obj:any){
    return this.http.post(this.url+'/api/Contacts/Ignore/'+id,obj)
  }
  unignoreContact(id:number,obj:any){
    return this.http.post(this.url+'/api/Contacts/UnIgnore/'+id,obj)
  }

}
