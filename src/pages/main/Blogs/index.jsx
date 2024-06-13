import React, { useEffect, useState } from "react";
import bg_9 from "../../../assets/images/bg_9.png";
import { getArtist, getBlogs } from "../../../api/blog";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { useDispatch } from "react-redux";
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
          className="w-full h-[750px] bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(${bg_9})`,
          }}
        />
        <div className="w-[530px] absolute top-[200px] left-[300px]">
          <span className="flex justify-start items-start text-[60px] font-bold text-[#fff]">
            Ready to dive in the world of art?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
            Immerse yourself in breathtaking artworks and inspiring stories on
            our art website.
          </span>

          <div className="flex gap-4 items-center">
            <button className="bg-[#fb9054] rounded-[12px] w-3/2 p-4">
              <span className="text-[20px] text-[#000]">
                Discover ArtSpectrum
              </span>
            </button>
            {isLogin.userCredentials.role === "Admin" && (
              <button
                className="bg-[#fb9054] rounded-[12px] w-3/2 p-4"
                onClick={onCreateBlog}
              >
                <span className="text-[20px] text-[#000]">Create blog</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <span className="flex justify-center items-start text-[36px] font-bold text-[#000] text-center my-20">
        Latest Article
      </span>
      <div>
        <div className="flex justify-center gap-[135px]">
          {dataBlogs && dataBlogs.length > 0 ? (
            dataBlogs.slice(0, 3).map((item, index) => {
              return (
                <div
                  className="relative w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]"
                  key={index}
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
                <div className="w-[55%] h-[650px] bg-[#c4c4c4]" />
                <div className="w-[45%] text-center pl-28">
                  <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
                    {item.titeBlog}
                  </div>
                  <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
                    {item.descriptionBlog}
                  </div>
                  <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-4">
                    <span className="text-[20px] text-[#fff]">MORE</span>
                  </button>
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
                  <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-4">
                    <span className="text-[20px] text-[#fff]">MORE</span>
                  </button>
                </div>
                <div className="w-[55%] h-[650px] bg-[#c4c4c4]" />
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