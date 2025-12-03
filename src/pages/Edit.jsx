import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
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

  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tours/${id}`);
        setName(data.name ?? '');
        setDestination(data.destination ?? '');
        setDuration(data.duration ?? '');
        setPrice(data.price ?? '');
        setImage(data.image ?? '');
        setDescription(data.description ?? '');
        setAvailable(data.available ?? '');
        setCategory(data.category ?? 'Tour nội địa');
        setActive(Boolean(data.active));
      } catch (error) {
        toast.error('Loi API');
      }
    };
    getTour(id);
  }, [id]);

  // handleChange

  const handleSubmit = async event => {
    event.preventDefault(); // ngan can load form
    try {
      await axios.put(`http://localhost:3000/tours/${id}`, {
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
      toast.success('Cap nhat tour duoc roi');
      navigate('/list');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Update Tour ID :{id}</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            value={name} // document.getElementBy(id).value
            onChange={event => setName(event.target.value)}
            type="text"
            id="name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="destination" className="block font-medium mb-1">
            Destination
          </label>
          <input
            value={destination}
            onChange={event => setDestination(event.target.value)}
            type="text"
            id="destination"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block font-medium mb-1">
            Duration
          </label>
          <input
            value={duration}
            onChange={event => setDuration(event.target.value)}
            type="text"
            id="duration"
            placeholder="VD: 4 ngày 3 đêm"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            value={price}
            onChange={event => setPrice(event.target.value)}
            type="number"
            id="price"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            value={image}
            onChange={event => setImage(event.target.value)}
            type="url"
            id="image"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            id="description"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="available" className="block font-medium mb-1">
            Available
          </label>
          <input
            value={available}
            onChange={e => setAvailable(e.target.value)}
            type="number"
            min="0"
            id="available"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;