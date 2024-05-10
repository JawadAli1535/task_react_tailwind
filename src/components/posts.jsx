import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const [likeCount, setLIkeCount] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((res) => {
        console.log('resp', res.data);
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('errro', error);
      });
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-center">Recent Posts</h2>

      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="flex justify-center gap-4 flex-wrap py-10">
          {posts.map((post, ind) => {
            return (
              <div
                className="basis-[300px] border border-l-indigo-400 p-4 rounded-lg hover:bg-[#43a8af]"
                key={ind}
              >
                <h3>{post.id}</h3>
                <h3>{post.title}</h3>
                <p>{post.body}</p>

                <button
                  className="my-3 border-none bg-[#4570d4] p-3 rounded-lg text-white"
                  onClick={() => {
                    setLIkeCount(likeCount + 1);
                  }}
                >
                  Like: {likeCount}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
