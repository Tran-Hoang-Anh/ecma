import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState('');
  const [category, setCategory] = useState('Tour nội địa');
  const [active, setActive] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/tours', {
        name,
        destination,
        duration,
        price: Number(price),
        image,
        description,
        available: available === '' ? 0 : Number(available),
        category,
        active,
      });
      toast.success('Thêm tour thành công');
      navigate('/list');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Destination</label>
          <input value={destination} onChange={e => setDestination(e.target.value)} type="text" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input value={duration} onChange={e => setDuration(e.target.value)} type="text" placeholder="VD: 4 ngày 3 đêm" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input value={image} onChange={e => setImage(e.target.value)} type="url" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Available</label>
          <input value={available} onChange={e => setAvailable(e.target.value)} type="number" min="0" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-white"
          >
            <option value="Tour nội địa">Tour nội địa</option>
            <option value="Tour quốc tế">Tour quốc tế</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="active"
            type="checkbox"
            checked={active}
            onChange={e => setActive(e.target.checked)}
          />
          <label htmlFor="active" className="font-medium">Active</label>
        </div>

        <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;