import { Post } from "../types/Post";

const BASE_URL = 'https://yourtestapi.com/api/posts';

export const getPosts = (): Promise<Post[]> => {
  return fetch(`${BASE_URL}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    })
};

export const removePost = (postId: number) => {
  return fetch(`${BASE_URL}/${postId}`, { method: 'DELETE' })
};

export const editPost = (post: Partial<Post>, postId: number) => {
  return fetch(`${BASE_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post),
  })
    .then(response => response.json());
}

export const createPost = (post: Partial<Post>): Promise<Post> => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post),
  })
    .then(response => response.json());
};
