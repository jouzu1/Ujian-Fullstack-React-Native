package com.perpus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.perpus.entity.Biodata;

public interface BiodataRepository extends CrudRepository<Biodata, Long>{
//	List<Buku> findByNamaBuku(String namaBuku);
	
	@Query(value = "select * from buku where nama_buku like %?1%",nativeQuery=true)
	List<Biodata> findByNamaBuku( String namaBuku);
}
