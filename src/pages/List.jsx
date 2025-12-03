import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function ListPage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours');
        setTours(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getTours();
  }, []);

  const handleDelete = async id => {
    if (confirm('Delete')) {
      try {
        await axios.delete('http://localhost:3000/tours/' + id);
        setTours(tours.filter(tour => tour.id !== id));
        toast.success('Đã xóa');
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Destination</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Duration</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Category</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Active</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Image</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Price</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Available</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.map(tour => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.category}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.active ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.image ? <img src={tour.image} alt={tour.name} className="h-12 w-16 object-cover rounded" /> : '-'}
                </td>
                <td className="px-4 py-2 border border-gray-300">{tour.description}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.price?.toLocaleString?.() || tour.price}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.available ?? '-'}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-2">
                    <button className="text-red-600" onClick={() => handleDelete(tour.id)}>
                      Delete
                    </button>
                    <Link to={`/edit/${tour.id}`}>
                      <button className="text-blue-600">Edit</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;