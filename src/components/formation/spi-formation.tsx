import { Component, State } from '@stencil/core';
import { Formation } from '../../global/formation';


@Component({
  tag: 'spi-formation',
  styleUrl: 'spi-formation.scss'
})
export class SpiFormation {



  data: any;
  @State() formations: Formation[];

  componentWillLoad() {
    return fetch('https://api-dosispi.cleverapps.io/formations')
      .then(response => response.json())
      .then(data => {
        this.formations = data;
        console.log(this.formations);

      });

  }

  render() {
    return (

      <div class="container is-fluid">


        <div class="columns is-desktop is-multiline">
          {this.formations.map(
            (frm) =>
            
              <div class="column is-two-fifths" >
                <div class="card large">
                  <div class="card-image">
                    <figure class="image is-centred">
                    <i class="fas fa-glasses"></i>  </figure>
                  </div>
                  <div class="card-content">

                    <br />
                    <strong class="is-size-5"> {frm.diplome}&nbsp;{frm.doubleDiplome}</strong><br />
                    <strong class="is-size-5">{frm.nomFormation}</strong>
                    <br/>
                    <footer >
                      <br/>
                      <stencil-route-link url={'/formation/delete/' + frm.codeFormation}> <button class="button is-danger">Delete<i class="fas fa-trash-alt"></i></button></stencil-route-link>
                      <stencil-route-link url={'/formation/detail/' + frm.codeFormation}> <button class="button is-info">Details<i class="fas fa-list-alt"></i></button></stencil-route-link>
                      <stencil-route-link url={'/formation/edit/' + frm.codeFormation}> <button class="button is-warning">Edit<i class="fas fa-edit"></i></button></stencil-route-link>

                    </footer>
                  </div>
                </div>
              </div>







          )
          }

        </div>
        <br />
        <br />
        <br />
      </div>

    )
  }
}





