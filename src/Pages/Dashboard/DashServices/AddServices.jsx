/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import toast from 'react-hot-toast';

const AddServices = () => {
    const handleAddProduct = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const image = form.img.value;
        const product = { name,price,desc,image };
        
        fetch('http://localhost:5000/add-service',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if(data.data.acknowledged){
                  toast.success('Product Added Successfully');
                  console.log(data);
                  form.reset();
                }
            })
            .catch(err => console.log(err))

    }
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text" name='name'
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea name='desc'
              className="textarea h-24 textarea-bordered"
              placeholder="Short Description"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image Link</span>
            </label>
            <input
              type="text" name='img'
              placeholder="Product image Link"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product price</span>
            </label>
            <input
              type="text" name='price'
              placeholder="Product price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">add</button>
          </div>
        </form>
      </div>
    );
};

export default AddServices;