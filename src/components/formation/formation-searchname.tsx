import { Component, State } from '@stencil/core';

@Component({
  tag: 'formation-searchname',
  styleUrl: 'formation-searchname.scss'
})

export class FormationName {

  @State() formation: any = "";

  InputName: HTMLInputElement;

  findFrmByName() {
    let nomFormation = this.InputName.value;
    let url = 'http://api-dosispi.cleverapps.io/formations/nom/' + nomFormation

    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.formation = data;
      });
  }

  render() {
    if (this.formation == "") {
      return (

        <div class="container is-fluid">
        <br />
        <br />
        <div class="box">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input is-medium is primary is rounded" ref={(el: HTMLInputElement) => this.InputName = el} type="text" placeholder="le nom de la formation" />
            </p>
            <p class="control">
              <button class="button is-info is-medium" onClick={() => this.findFrmByName()}>Search</button>
            </p>
          </div>
        </div>
        
        <br />
        <br /> <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br />
        <br />
        </div>
      )
    }
    else {
        return (
          <div class="container is-fluid">
          <div class="card">
       <header class="card-header">
       
         <p class="card-header-title">
         Code de la formation : {this.formation[0].codeFormation}
         </p>
       </header>
       <div class="card-content">
         <div class="content">
         
         <div class="content">
          <p>Nom de la formation:&nbsp;&nbsp;{this.formation[0].nomFormation}</p>
         </div>
         <div class="content">
          <p> debut d'accreditation: &nbsp;&nbsp; {this.formation[0].debutAccreditation}</p>
         </div>
         <div class="content">
          <p> fin d'accreditation: &nbsp;&nbsp;&nbsp;{this.formation[0].finAccreditation}</p>
         </div>
         <div class="content">
          <p>diplome: &nbsp;&nbsp;{this.formation[0].diplome}</p>
         </div>
         <div class="content">
          <p>double diplomation:&nbsp;&nbsp; {this.formation[0].doubleDiplome}</p>
         </div>
         <div class="content">
          <p> numéro d'année:&nbsp;&nbsp;&nbsp;{this.formation[0].n0Annee}</p>
         </div>
         <br/>
         
       
       <stencil-route-link url={'/formation/delete/' + this.formation.codeFormation}> <button class="button is-danger">Delete&nbsp;&nbsp;<i class="fas fa-trash-alt"></i></button></stencil-route-link>
      &nbsp; &nbsp; &nbsp; <stencil-route-link url={'/formation/edit/' + this.formation.codeFormation}> <button class="button is-warning">Edit&nbsp;&nbsp;<i class="fas fa-edit"></i></button></stencil-route-link>

       
     </div>
     <br/>
     </div>
       
      
     </div>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/><br/>
     <br/>
     <br/>
     <br/>
     </div>
           
           )}
          }
    }