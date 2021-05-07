package com.perpus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.perpus.entity.Biodata;

public interface BiodataRepository extends CrudRepository<Biodata, Long>{
//	List<Buku> findByNamaBuku(String namaBuku);
	
	@Query(value = "select * from biodata where nama like %?1%",nativeQuery=true)
	List<Biodata> findByNama(String nama);
	
	@Query(value = "select * from biodata where email like %?1%",nativeQuery=true)
	List<Biodata> findByEmail(String email);
	
	@Query(value = "select * from biodata where phone like %?1%",nativeQuery=true)
	List<Biodata> findByPhone(String phone);
	
	@Query(value = "select * from biodata where address like %?1%",nativeQuery=true)
	List<Biodata> findByAddress(String address);
}
