package com.perpus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perpus.entity.Biodata;
import com.perpus.repository.BiodataRepository;

@CrossOrigin(origins = "http://localhost:3030")
@RestController
@RequestMapping("/buku")
public class BiodataController {
	@Autowired
	BiodataRepository bukurepo;

	@CrossOrigin(origins = "http://localhost:3030")
	@GetMapping("/get")
	public List<Biodata> getAll() {
		return (List<Biodata>) this.bukurepo.findAll();
	}

	@PostMapping("/add")
	public String addBuku(@RequestBody Biodata buku) {
		this.bukurepo.save(buku);
		return "Insert berhasil";
	}

	@GetMapping("/get/{title}")
	public List<Biodata> getAllByNamaBuku(@PathVariable("title") String title) {
		return (List<Biodata>) this.bukurepo.findByNamaBuku(title);
	}

	@DeleteMapping("/delete/{id}")
	public String getDelete(@PathVariable String id){
		this.bukurepo.deleteById(Long.parseLong(id));
		return "Berhasil Dihapus";
	}
	@PutMapping("/update/{id}")
	public String updateBuku(@PathVariable String id, @RequestBody Biodata buku) {
		buku.setId(Long.parseLong(id));
		this.bukurepo.save(buku);
		return "Berhasil Di Update";
	}
		
}

