import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);
  const [likeCounts, setLikeCounts] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        setTimeout(() => {
          const postsWithLikes = res.data.map((post) => ({
            ...post,
            likeCount: likeCounts[post.id] || 0,
          }));
          setPosts(postsWithLikes);
          setLoading(false);
        }, 2500);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [userId, likeCounts]);

  const handleChangeUserPost = (index) => {
    const newUserId = index + 1;
    setUserId(newUserId);
    setLoading(true);
  };

  const handlePostLike = (postId) => {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  const userBtns = [
    { btn: 'user1' },
    { btn: 'user2' },
    { btn: 'user3' },
    { btn: 'user4' },
    { btn: 'user5' },
    { btn: 'user6' },
    { btn: 'user7' },
    { btn: 'user8' },
    { btn: 'user9' },
  ];

  return (
    <div className="my-10">
      <h2 className="text-center">Recent Posts</h2>

      <div className="flex flex-wrap lg:flex-nowrap justify-center my-4">
        {userBtns.map((userBtn, index) => (
          <button
            key={index}
            className="mr-2 border rounded-lg p-2 border-[#43a8af] transition-all delay-75 ease-out hover:bg-[#43a8af] hover:text-white"
            onClick={() => handleChangeUserPost(index)}
          >
            {userBtn.btn}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center animate-ping mt-8 text-lg">Loading...</p>
      ) : (
        <div className="flex justify-center gap-4 flex-wrap py-10">
          {posts.map((post, index) => (
            <div
              className="basis-[300px] grow border border-l-indigo-400 p-4 rounded-lg transition-all delay-75 ease-out hover:text-white hover:bg-[#43a8af]"
              key={index}
            >
              <h3>{post.id}</h3>
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              <button
                className="my-3 border-none bg-[#4570d4] p-3 rounded-lg text-white"
                onClick={() => handlePostLike(post.id)}
              >
                Like: {likeCounts[post.id] || 0}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
