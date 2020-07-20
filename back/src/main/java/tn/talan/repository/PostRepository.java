package tn.talan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.talan.entities.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post>  findPostByCategorieNom(String cat);
}
