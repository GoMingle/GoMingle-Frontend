import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EventsTile = ({ id, title, description, location, date, price, image, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-700 mb-2">{location}</p>
        <p className="text-gray-700 mb-2">{date}</p>
        <p className="text-gray-700 mb-2">{price}</p>
        <div className="flex justify-end mt-4">
          <button onClick={() => onEdit(id)} className="text-black mr-4 bottom right">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(id)} className="text-[#C738EF]">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsTile;
