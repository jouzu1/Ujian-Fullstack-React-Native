package com.perpus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perpus.entity.Buku;
import com.perpus.repository.BukuRepository;
@CrossOrigin(origins="http://localhost:3030")
@RestController
@RequestMapping("/buku")
public class BukuController {
	@Autowired
	BukuRepository bukurepo;
	
	@CrossOrigin(origins="http://localhost:3030")
	@GetMapping("/get")
	public List<Buku> getAll(){
		return (List<Buku>) this.bukurepo.findAll();
	}
	
	@PostMapping("/add")
	public String addBuku(@RequestBody Buku buku) {
		 this.bukurepo.save(buku);
		 return "Insert berhasil";
	}
	
	@GetMapping("/get/{title}")
	public List<Buku> getAllByNamaBuku(@PathVariable("title")String title){
		return (List<Buku>) this.bukurepo.findByNamaBuku(title);
	}
}
