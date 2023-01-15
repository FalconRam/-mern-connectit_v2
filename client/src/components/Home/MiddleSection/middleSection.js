import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getPostsByFollowing } from "../../../actions/posts";

import Posts from "./Posts/posts";
import "./middleSection.css";

const MiddleSection = ({ posts, isLoading }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(getPostsByFollowing());
  }, []);

  return (
    <>
      <div>
        {posts?.map((post, i) => (
          <Posts key={i} post={post} />
        ))}
      </div>
    </>
  );
};

export default MiddleSection;
