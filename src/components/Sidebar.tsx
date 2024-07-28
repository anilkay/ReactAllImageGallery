import { Link } from 'react-router-dom';

const  Sidebar= ()=>
{
    return (
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <Link to="/photocarousel" className="block p-2 hover:bg-gray-700">Photo Carousel</Link>
            </li>
            <li className="mb-2">
              <Link to="/photos" className="block p-2 hover:bg-gray-700">Photos</Link>
            </li>
          </ul>
        </div>
      );

}

export default Sidebar