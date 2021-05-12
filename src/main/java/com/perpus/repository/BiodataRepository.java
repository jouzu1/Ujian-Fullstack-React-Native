package com.perpus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.perpus.entity.Biodata;

public interface BiodataRepository extends JpaRepository<Biodata, Long>{
//	List<Buku> findByNamaBuku(String namaBuku);
	
//	@Query(value = "select * from biodata where nama like %?1%",nativeQuery=true)
//	List<Biodata> findByNama(String nama);
//	
//	@Query(value = "select * from biodata where email like %?1%",nativeQuery=true)
//	List<Biodata> findByEmail(String email);
//	
//	@Query(value = "select * from biodata where phone like %?1%",nativeQuery=true)
//	List<Biodata> findByPhone(String phone);
//	
//	@Query(value = "select * from biodata where address like %?1%",nativeQuery=true)
//	List<Biodata> findByAddress(String address);
	
	@Query(value = "SELECT *\n"
			+ "from biodata\n"
			+ "Where (CASE "
			+ "WHEN 'nama'=:type THEN nama LIKE %:value% "
			+ "WHEN 'phone'=:type THEN phone LIKE %:value% "
			+ "WHEN 'address'=:type THEN address LIKE %:value% "
			+ "WHEN 'email'=:type THEN email LIKE %:value% "
			+ "END)",nativeQuery=true)
	List<Biodata> findBySearchBy(@Param("type")String type,@Param("value")String value);
}
