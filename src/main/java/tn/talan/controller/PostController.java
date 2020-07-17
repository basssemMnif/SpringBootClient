package tn.talan.controller;
import tn.talan.entities.Categorie;
import tn.talan.entities.Post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.talan.service.Impl.CategorieServiceImpl;
import tn.talan.service.Impl.PostServiceImpl;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PostController {
	 @Autowired
     PostServiceImpl PostService;
	 @Autowired
     CategorieServiceImpl CategorieService;
	 @GetMapping("/posts")
		public List<Post> showAllPosts() {
			return PostService.showPosts();
		}
	 @GetMapping("/categories")
		public List<Categorie> showAllCategories() {
			return CategorieService.showCategories();
		}
	 @PostMapping("/addPost")
		@ResponseBody
		public void addPost(@RequestBody Post poste) {
		 System.out.println(poste);
		 PostService.addPost(poste);
		}
	 @PutMapping
		@ResponseBody
		public void modifyPost(@RequestBody Post poste) {
		 PostService.updatePost(poste);
		}
	 @DeleteMapping("{id}")
		@ResponseBody
		public void deletePost(@PathVariable("id") Long idPoste) {
		 PostService.deletePost(idPoste);
		}
	 
	 @GetMapping("/addLike/{id}")
		@ResponseBody
		public void likePoste(@PathVariable("id") Long id) {
		 PostService.likePost(id);
		}

}
