var wwwww = `
{{#if final}}
<button type="button" class="btn btn-danger btn-lg center-block deleteCart">Delete cart</button>
{{/if}}
<br>
<div class="container">    
  <div class="row">
  {{#each final}}
    <div class="col-sm-4" data-id="{{id}}" data-type="{{title}}">
      <div class="panel panel-success">
        <div class="panel-heading"><strong>{{id}}.{{title}}</strong></div>
        <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer">
        <p>Price: {{price}} Quantity: {{quantity}}</p>
        <button type="button" class="btn btn-success btn-lg plusProductFromCart">+</button>
        <button type="button" class="btn btn-primary btn-lg minusProductFromCart">-</button>
        <button type="button" class="btn btn-danger btn-lg deleteProductFromCart">Delete</button>
        </div>
      </div>
    </div>
    {{/each}}
  </div>
</div>
<hr>
{{#if final}}
<div class="price">Products: <span id="product-price"></span></div>
<div class="price">Subtotal: <span id="shiping-price"></span></div>
<div class="price">Total: <span id="total-price"></span></div>
{{else}}
<p>YOUR CART IS EMPTY</p>
{{/if}}
<br>
     `;
