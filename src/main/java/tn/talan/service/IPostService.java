package tn.talan.service;

import java.util.List;

import tn.talan.entities.Post;

public interface IPostService {

	public List<Post> showPosts();
	public void addPost(Post p);
	public void updatePost(Post p);
	public void deletePost(Long id);
	public void likePoste(Long id) ;
	public Post searchPostByCategorie(Long id,String name);
}
