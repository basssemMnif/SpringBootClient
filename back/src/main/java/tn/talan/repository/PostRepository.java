package tn.talan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.talan.entities.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
Post findPostByCategorie(String cat);
}
