var product = `
<button type="button text-center" class="btn btn-success btn-lg center-block" data-toggle="modal" data-target="#myModal">ADD NEW PRODUCT</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="form-group">
                <label for="id">ID: </label>
                <input type="text" class="form-control" id="id">
            </div>
            <div class="form-group">
                <label for="title">Title: </label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
                <label for="comment">Description:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
            <div class="form-group">
                <label for="title">Price: </label>
                <input type="text" class="form-control" id="price">
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal" id="add">Create</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
<br>

<div class="container">    
  <div class="row">
  {{#each final}}
    <div class="col-sm-4" data-id="{{id}}" data-title="{{title}}" data-description="{{description}}" data-price="{{price}}" data-quantity="{{quantity}}">
      <div class="panel panel-success">
        <div class="panel-heading">{{id}}.{{title}}</div>
        <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer text-center">
        <p>Price: {{price}}</p>
        <p>{{description}}</p>
        <button type="button" class="btn btn-danger btn-lg delete">Delete</button>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal{{id}}">EDIT</button>
        <button type="button" class="btn btn-success btn-lg buy">Buy</button>
        </div>
      </div>
    </div>
    
    
            <!-- Modal -->
        <div id="myModal{{id}}" class="modal fade" role="dialog">
          <div class="modal-dialog">
        
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="form-group">
                <label for="id">ID: </label>
                <input type="text" class="form-control" id="id{{id}}" placeholder="{{id}}" disabled>
            </div>
            <div class="form-group">
                <label for="title">Title: </label>
                <input type="text" class="form-control"  id="title{{id}}"">
            </div>
            <div class="form-group">
                <label for="comment">Description:</label>
                <textarea class="form-control" rows="5" id="description{{id}}"></textarea>
            </div>
            <div class="form-group">
                <label for="title">Price: </label>
                <input type="text" class="form-control"  id="price{{id}}">
            </div>

            <div class="modal-footer" >
            <button type="button" class="btn btn-default" id="saveEdit" data-dismiss="modal" data-test="{{id}}">Save</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        
          </div>
        </div>
    {{/each}}
  </div>
</div>
     `;
