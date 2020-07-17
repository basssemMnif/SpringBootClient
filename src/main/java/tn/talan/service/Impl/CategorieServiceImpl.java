package tn.talan.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.talan.entities.Categorie;
import tn.talan.repository.CategorieRepository;
import tn.talan.repository.PostRepository;
import tn.talan.service.ICategorieService;
@Service

public class CategorieServiceImpl implements ICategorieService{
	 @Autowired
     CategorieRepository categorieRepository;

	@Override
	public List<Categorie> showCategories() {
		 return categorieRepository.findAll();
	}

}
