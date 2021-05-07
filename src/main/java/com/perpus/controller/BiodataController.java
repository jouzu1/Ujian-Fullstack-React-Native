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

//@CrossOrigin(origins = "http://localhost:3030")
@RestController
@RequestMapping("/biodata")
public class BiodataController {
	@Autowired
	BiodataRepository biorepo;

//	@CrossOrigin(origins = "http://localhost:3030")
	@GetMapping("/get")
	public List<Biodata> getAll() {
		return (List<Biodata>) this.biorepo.findAll();
	}

	@PostMapping("/add")
	public String addBuku(@RequestBody Biodata bio) {
		this.biorepo.save(bio);
		return "Insert berhasil";
	}

	@GetMapping("/get/nama/{nama}")
	public List<Biodata> getAllByNama(@PathVariable String nama) {
		return (List<Biodata>) this.biorepo.findByNama(nama);
	}
	
	@GetMapping("/get/email/{email}")
	public List<Biodata> getAllByEmail(@PathVariable String email) {
		return (List<Biodata>) this.biorepo.findByEmail(email);
	}
	
	@GetMapping("/get/phone/{phone}")
	public List<Biodata> getAllByPhone(@PathVariable String phone) {
		return (List<Biodata>) this.biorepo.findByPhone(phone);
	}
	
	@GetMapping("/get/address/{address}")
	public List<Biodata> getAllByAddress(@PathVariable String address) {
		return (List<Biodata>) this.biorepo.findByAddress(address);
	}

	@DeleteMapping("/delete/{id}")
	public String getDelete(@PathVariable String id){
		this.biorepo.deleteById(Long.parseLong(id));
		return "Berhasil Dihapus";
	}
	@PutMapping("/update/{id}")
	public String updateBio(@PathVariable long id, @RequestBody Biodata bio) {
		bio.setId(id);
		this.biorepo.save(bio);
		return "Berhasil Di Update";
	}
		
}

