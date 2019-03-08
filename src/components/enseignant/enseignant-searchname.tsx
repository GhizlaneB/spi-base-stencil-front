import { Component, State } from '@stencil/core';

@Component({
  tag: 'enseignant-searchname',
  styleUrl: 'enseignant-searchname.scss'
})

export class EnseignantName {

  @State() enseignant: any = "";

  InputName: HTMLInputElement;

  findEnsByName() {
    let nom = this.InputName.value;
    let url = 'https://api-dosispi.cleverapps.io/enseignants/nom/' + nom

    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.enseignant = data;
      });
  }

  render() {
    if (this.enseignant == "") {
      return (

        <div class="container is-fluid">
        <br />
        <br />
        <div class="box">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input is-medium is primary is rounded" ref={(el: HTMLInputElement) => this.InputName = el} type="text" placeholder="le nom de l'enseignant" />
            </p>
            <p class="control">
              <button class="button is-info is-medium" onClick={() => this.findEnsByName()}>Search</button>
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
              <div class="center">
    
                <div class="card">
                  <header class="card-header">
    
                    <p class="card-header-title">
                      No Enseignant : {this.enseignant[0].noEnseignant}
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="card-image">
                        <figure class="image">
                          <img class="myimage" src="data:image/png;base64,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" alt="Image" />
                        </figure>
                      </div>
                    </div>
                    <div class="content"><br />
                      <p> <i class="fas fa-user"></i>&nbsp;&nbsp;{this.enseignant[0].nom}&nbsp;{this.enseignant[0].prenom}</p>
                    </div>
                    <div class="content">
                      <p> <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp; {this.enseignant[0].adresse}&nbsp;{this.enseignant[0].ville}&nbsp;{this.enseignant[0].codePostal}</p>
                    </div>
                    <div class="content">
                      <p> <i class="fas fa-transgender"></i>&nbsp;&nbsp;&nbsp;{this.enseignant[0].sexe}</p>
                    </div>
                    <div class="content">
                      <p> <i class="fas fa-at"></i> &nbsp;&nbsp;{this.enseignant[0].emailPerso}</p>
                    </div>
                    <div class="content">
                      <p><i class="far fa-envelope-open"></i>&nbsp;&nbsp; {this.enseignant[0].emailUbo}</p>
                    </div>
                    <div class="content">
                      <p> <i class="fas fa-phone-volume"></i>&nbsp;&nbsp;&nbsp;{this.enseignant[0].telephone}</p>
                    </div>
                    <div class="content">
                      <p> <i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;{this.enseignant[0].mobile}</p>
                    </div>
                    <div class="content">
                      <p> type : &nbsp;&nbsp;{this.enseignant[0].type}</p>
                    </div>
                  </div>
                 
               
                </div>
             <br/>
                <br/>

              </div>
              <br/>
    
              <br />
    
            </div>  )}
            
          }
    }