package tn.talan.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.talan.entities.Post;
import tn.talan.repository.PostRepository;
import tn.talan.service.IPostService;
@Service
public class PostServiceImpl implements IPostService{
	  @Autowired
	     PostRepository postRepository;

	@Override
	public List<Post> showPosts() {
		  return postRepository.findAll();
	}

	@Override
	public void addPost(Post p) {
		postRepository.save(p);
		
	}

	@Override
	public void updatePost(Post p) {
		Post newPost = postRepository.findById(p.getId()).orElseThrow(IllegalStateException::new);
		newPost.setDateajout(p.getDateajout());
		newPost.setDescription(p.getDescription());
		newPost.setNbLikes(p.getNbLikes());
		newPost.setTitre(p.getTitre());
		newPost.setLocalisation(p.getLocalisation());
		newPost.setCategorie(p.getCategorie());
		
		postRepository.save(p);
	}

	@Override
	public void deletePost(Long id) {
		postRepository.deleteById(id);
	}
	@Override
	public void likePost(Long id) {
		Post p = postRepository.findById(id).orElseThrow(IllegalStateException::new);
		p.setNbLikes(p.getNbLikes()+1);
		postRepository.save(p);
		
	}

	@Override
	public Post findPostByCategorie(String cat) {
		Post p = postRepository.findPostByCategorie(cat);
		return p;
	}
}
