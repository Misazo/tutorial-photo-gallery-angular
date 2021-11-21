import { HttpClient , HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class ApiRest{

    constructor(private httpClient : HttpClient){}

    users : any;
    listUsers = [];
    listAddressUsers = [];

    todos : any;
    listTodo = [];

    ngOnInit(){
      }
    
      getUsers(){
        this.httpClient.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(
            (response) => {
                this.users = response;
                // this.emitTodoSubject();
                console.log("Request GET User success");
                
                console.log(response);
    
                this.users.forEach(( userGet , index)=> {                  
                  this.listAddressUsers.push({
                    city:userGet['address'].city,
                    street:userGet['address'].street,
                    suite:userGet['address'].suite,
                    lat:userGet['address']['geo'].lat,
                    lng:userGet['address']['geo'].lng,
    
                  })
                  this.listUsers.push({
                    id: userGet.id,
                    name: userGet.name,
                    username: userGet.username,
                    email: userGet.email,
                    phone: userGet.phone,
                    website: userGet.website,
                    address : this.listAddressUsers[index]
                  });
                //   console.log("Test name:"+this.listUsers[index].name);
                //   console.log("Test city:"+this.listUsers[index]['address'].city);
    
                });
                console.log(this.listUsers);
            },
            (error) => {
                console.log("Erreur de chargement ! " + error);
            }
        )
        return this.listUsers;
      }

      getTodo(){
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
        .subscribe(
            (response) => {
                this.todos = response;
                // this.emitTodoSubject();
                console.log("Request GET Todo success");
                console.log(response);
                this.todos.forEach(( todoGet , index)=> {                  
                    this.listTodo.push({
                      userId:todoGet.userId,
                      title:todoGet.title,
                      completed:todoGet.completed,
                    })
                }),
            (error) => {
                console.log("Erreur de chargement ! " + error);
            }
        return this.listTodo;
      })
    }
}