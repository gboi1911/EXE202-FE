import React, { useEffect, useState } from "react";
import bg_9 from "../../../assets/images/bg_9.png";
import { getArtist, getBlogs } from "../../../api/blog";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "../../../store/modal/modal-slice";
import CreateBlogModal from "../../../components/Modal/createBlog";
function Blogs() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const [dataBlogs, setDataBlogs] = useState(false);
  const [dataArtist, setDataArtist] = useState(false);
  const onCreateBlog = () => {
    dispatch(open(<CreateBlogModal dataArtist={dataArtist} />));
  };
  async function fetchGetBlogs() {
    const data = await getBlogs();
    if (data.succeeded) {
      setDataBlogs(data.data);
    }
  }
  async function fetchGetArtist() {
    const data = await getArtist();
    if (data.succeeded) {
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].value = data.data[i].artistId;
        data.data[i].label = `artistId - ${data.data[i].artistId}`;
      }
      setDataArtist(data.data);
    }
  }
  useEffect(() => {
    fetchGetBlogs();
    fetchGetArtist();
  }, []);
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_9})`,
          }}
        />
        <div className="w-[530px] absolute top-[200px] left-[300px]">
          <span className="flex justify-start items-start text-[50px] font-bold text-[#fff]">
          Bạn đã sẵn sàng bước vào thế giới nghệ thuật của chúng tôi chưa ?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
          Đắm chìm trong những tác phẩm nghệ thuật ngoạn mục và những câu chuyện đầy cảm hứng trên trang web nghệ thuật của chúng tôi.
          </span>

          <div className="flex gap-4 items-center">
            <Link to="/products">
            <button className="bg-[#fb9054] rounded-[12px] w-3/2 p-4">
              <span className="text-[20px] text-[#000]">
                Khám phá ArtSpectrum
              </span>
            </button>
            </Link>
            {["admin", "artist"].includes(isLogin.userCredentials.role.toLowerCase()) && (
              <button
                className="bg-[#fb9054] rounded-[12px] w-3/2 p-4"
                onClick={onCreateBlog}
              >       
                <span className="text-[20px] text-[#000]">Hãy để lại chia sẻ của bạn</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <span className="flex justify-center items-start text-[36px] font-bold text-[#000] text-center my-20">
        Bài đăng mới nhất
      </span>
      <div>
        <div className="flex justify-center gap-[135px]">
          {dataBlogs && dataBlogs.length > 0 ? (
            dataBlogs.slice(0, 3).map((item, index) => {
              return (
                <div
                  className="relative w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]"
                  key={index}
                  style={{
                    backgroundImage: `url(${item.imgBlog})`,    
                    backgroundSize: "cover",
                    backgroundRepeat: "round"}}
                >
                  <div className="flex justify-center items-center w-[350px] h-[150px] bg-[#fff] shadow-[0_16px_22px_0_rgba(0,0,0,0.03)]  rounded-br-[20px] rounded-bl-[20px] absolute bottom-0">
                    <span className="text-[16px] font-normal text-[#000] absolute">
                      {item.titeBlog}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]" />
          )}
        </div>
      </div>
      <div className="mx-[130px]">
        {dataBlogs && dataBlogs.length > 0 ? (
          dataBlogs.slice(0, 1).map((item, index) => {
            return (
              <div className="flex items-center my-28" key={index}>
                <img className="w-[55%] h-[650px] bg-[#c4c4c4]" src={item.imgBlog} alt=""/>
                <div className="w-[45%] text-center pl-28">
                  <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
                    {item.titeBlog}
                  </div>
                  <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
                    {item.descriptionBlog}
                  </div>                  
                </div>
              </div>
            );
          })
        ) : (
          <div />
        )}
        {dataBlogs && dataBlogs.length > 0 ? (
          dataBlogs.slice(1, 2).map((item, index) => {
            return (
              <div className="flex items-center my-28" key={index}>
                <div className="w-[45%] text-center pr-28">
                  <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
                    {item.titeBlog}
                  </div>
                  <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
                    {item.descriptionBlog}
                  </div>                  
                </div>
                <img className="w-[55%] h-[650px] bg-[#c4c4c4]" src={item.imgBlog} alt=""/>
              </div>
            );
          })
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Blogs;
