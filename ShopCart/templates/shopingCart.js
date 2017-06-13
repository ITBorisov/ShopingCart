var hoverShopingCart = `
    {{#if final}}
    {{#each final}}
        <li>
            <span class="item">
              <span class="item-left">
                 <img src="images/image{{picture}}.jpg" style="width: 50px" alt="" />
                  <span class="item-info">
                      <span>{{title}}</span>
                  </span>
              </span>
              <span class="item-right">
                  <span>Quantity: {{quantity}}</span>
              </span>
            </span>
        </li>
    {{/each}}
    {{else}}
    <p>The cart is empty!</p>
    {{/if}}
    <li class="divider"></li>
     `;
