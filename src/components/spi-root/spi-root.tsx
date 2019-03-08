import { Component } from "@stencil/core";
import { MatchResults as _ } from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/formation" component="spi-formation" exact={true} />
              <stencil-route url="/formation/add" component="formation-add"/>
              <stencil-route url="/formation/delete/:codeFormation" component="formation-delete"/>
              <stencil-route url="/formation/detail/:codeFormation" component="formation-detail"/>
              <stencil-route url="/formation/edit/:codeFormation" component="formation-edit"/>
              <stencil-route url="/formation/searchByName" component="formation-searchname"/>




              <stencil-route url="/enseignant" component="spi-enseignant" exact={true} />
              <stencil-route url="/enseignant/add" component="enseignant-add"/>
              <stencil-route url="/enseignant/delete/:noEnseignant" component="enseignant-delete" />
              <stencil-route url="/enseignant/detail/:noEnseignant" component="enseignant-detail" />
              <stencil-route url="/enseignant/edit/:noEnseignant" component="enseignant-edit"/>
              <stencil-route url="/enseignant/searchByName" component="enseignant-searchname"/>

              <stencil-route url="/enseignant/search" component="enseignant-search"/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
