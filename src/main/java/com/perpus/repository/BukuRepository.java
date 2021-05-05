package com.perpus.repository;

import org.springframework.data.repository.CrudRepository;

import com.perpus.entity.Buku;

public interface BukuRepository extends CrudRepository<Buku, Long>{
	
}
