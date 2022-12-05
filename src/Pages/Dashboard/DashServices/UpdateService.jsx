import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { DataContext } from '../../../Context/Context';

const UpdateService = (id) => {
    const data = useLoaderData()
    const {refresh, setRefresh} = useContext(DataContext);
  
    const [service] = data;

    // console.log(service);
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const image = form.img.value;
        const product = { name,price,desc,image };
        console.log(product);
        fetch(`http://localhost:5000/service-update/${service._id}`,{
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.modifiedCount > 0) {
                  toast.success("Product Updated Successfully");
                    console.log(data);
                    setRefresh(!refresh);
                }
            })
            .catch(err => console.log(err))
    }
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name" defaultValue={service.name} 
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              name="desc"
              className="textarea h-24 textarea-bordered" defaultValue={service.desc}
              placeholder="Short Description"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image Link</span>
            </label>
                    <div className="flex">
                        <img className='w-10 mr-2 rounded-md' src={service.image} alt="" />
                <input
                  type="text"
                  name="img" defaultValue={service.image}
                  placeholder="Product image Link"
                  className="input input-bordered"
                />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product price</span>
            </label>
            <input
              type="text"
              name="price" defaultValue={service.price}
              placeholder="Product price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    );
};

export default UpdateService;