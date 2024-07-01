import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlogById } from '../../../api/blog';
import { getProducts, deleteProductById } from '../../../api/product';
import { getUsers, deleteUserById } from '../../../api/dashboard';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

function AdminDashboard() {
  const dispatch = useDispatch();
  const [dataProducts, setDataProducts] = useState([]);
  const [dataBlogs, setDataBlogs] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState('');
  const [searchProducts, setSearchProducts] = useState('');
  const [searchBlogs, setSearchBlogs] = useState('');

  async function fetchGetUsers() {
    const data = await getUsers();
    if (data.succeeded) {
      setDataUsers(data.data);
    }
  }

  async function fetchGetBlogs() {
    const data = await getBlogs();
    if (data.succeeded) {
      setDataBlogs(data.data);
    }
  }

  async function fetchGetProducts() {
    const data = await getProducts();
    if (data.succeeded) {
      setDataProducts(data.data);
    }
  }

  useEffect(() => {
    fetchGetBlogs();
    fetchGetProducts();
    fetchGetUsers();
  }, []);

  const handleDeleteUser = async (values) => {
    const data = await deleteUserById(values);
    if (data.succeeded) {
      fetchGetUsers();
      toast.success("Delete user successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("Delete user failed!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  async function handleDeleteProduct(values) {
    if (!values) return;
    const data = await deleteProductById(values);
    if (data.succeeded) {
      fetchGetProducts();
      toast.success("Delete product successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("Delete product failed!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  async function handleDeleteBlog(values) {
    if (!values) return;
    const data = await deleteBlogById(values);
    if (data.succeeded) {
      fetchGetBlogs();
      toast.success("Delete blog successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("Delete blog failed!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }; 

  const filteredUsers = dataUsers.filter(user =>
    user.username.toLowerCase().includes(searchUsers.toLowerCase())
  );

  const filteredProducts = dataProducts.filter(product =>
    product.title.toLowerCase().includes(searchProducts.toLowerCase())
  );

  const filteredBlogs = dataBlogs.filter(blog =>
    blog.titeBlog.toLowerCase().includes(searchBlogs.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Quản trị</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Tài khoản</h2>
            <div className="relative mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm tài khoản..."
              value={searchUsers}
              onChange={(e) => setSearchUsers(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
            />              
              {searchUsers && (
                <button
                  className="absolute right-2 top-2 text-black-500"
                  onClick={() => setSearchUsers('')}
                >
                  &times;
                </button>
              )}
            </div>            
            {dataUsers.length ? (
              <ul>
                {filteredUsers.map(user => (
                  <li key={user.userId} className="border-b py-2 flex justify-between items-center">
                    <div>
                      {user.username} ({user.email})
                    </div>
                    <button 
                      className="bg-red-500 text-white p-2 rounded"
                      onClick={() => handleDeleteUser(user.userId)}
                    >
                      Xóa
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không tìm thấy.</p>
            )}
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Sản phẩm</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchProducts}
                onChange={(e) => setSearchProducts(e.target.value)}
                className="p-2 border rounded w-full"
              />
              {searchProducts && (
                <button
                  className="absolute right-2 top-2 text-black-500"
                  onClick={() => setSearchProducts('')}
                >
                  &times;
                </button>
              )}
            </div>
            {dataProducts.length ? (
              <ul>
                {filteredProducts.map(product => (
                  <li key={product.paintingId} className="border-b py-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover mr-4"/>
                        <div>
                          <div>{product.title}</div>
                          <div>{product.price} VND</div>
                        </div>
                    </div>
                    <button 
                      className="bg-red-500 text-white p-2 rounded"
                      onClick={() => handleDeleteProduct(product.paintingId)}
                    >
                      Xóa
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không tìm thấy.</p>
            )}
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Bài viết</h2>
            <div className="relative mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchBlogs}
              onChange={(e) => setSearchBlogs(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
            />
              {searchBlogs && (
                <button
                  className="absolute right-2 top-2 text-black-500"
                  onClick={() => setSearchBlogs('')}
                >
                  &times;
                </button>
              )}
            </div>            
            {dataBlogs.length ? (
              <ul>
                {filteredBlogs.map(blog => (
                  <li key={blog.blogId} className="border-b py-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={blog.imgBlog} alt={blog.titeBlog} className="w-16 h-16 object-cover mr-4"/>
                      <div>
                        {blog.titeBlog}
                      </div>
                    </div>
                    <button 
                      className="bg-red-500 text-white p-2 rounded"
                      onClick={() => handleDeleteBlog(blog.blogId)}
                    >
                      Xóa
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không tìm thấy.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
