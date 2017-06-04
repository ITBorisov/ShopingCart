var shopingCartt = `
    {{#each final}}
        <li>
            <span class="item">
              <span class="item-left">
                  <!--<img src="http://lorempixel.com/50/50/" alt="" />-->
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
    <li class="divider"></li>
     `;
