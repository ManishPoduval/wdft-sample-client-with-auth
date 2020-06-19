import React from 'react';

export default function AddTodo(props){
    return (
        <>
            <form onSubmit={props.onAdd}>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" class="form-control" name="description" id="description" />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </>
    )
}