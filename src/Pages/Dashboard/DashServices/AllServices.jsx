import React,{ useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context/Context';

const AllServices = () => {
    const { services, refresh, setRefresh } = useContext(DataContext);
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result.message==='deleted'){
                    toast.success('Product Deleted Successfully');
                    setRefresh(!refresh);
                }
            })
        .catch(error=>console.log(error))
    }
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>
                    {services.map((service) => (
          
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={service.image} alt=''/>
              </div>
            </div>
            <div>
            <div className="font-bold">{service.name}</div>
              
            </div>
          </div>
        </td>
        <td className='text-sm'>
          {service.desc.slice(0, 50)}
          <br/>
          <span className="badge badge-ghost badge-sm"> Support Technician</span>
        </td>
        <td>{service.price}</td>
        
        
        <th>
        <Link to={`/services/${service._id}`} className="btn btn-primary mr-3 text-white btn-xs">Edit</Link>
        <Link  className="btn bg-red-800 text-white btn-xs" onClick={()=>handleDelete(service._id)}>X</Link>
                                
        </th>
      </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    );
};

export default AllServices;