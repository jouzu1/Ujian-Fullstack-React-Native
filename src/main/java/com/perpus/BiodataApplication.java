package com.perpus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.perpus.entity.Biodata;
import com.perpus.repository.BiodataRepository;

@SpringBootApplication
public class BiodataApplication implements CommandLineRunner{

	@Autowired
	BiodataRepository biorepo;
	public static void main(String[] args) {
		SpringApplication.run(BiodataApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:3030");
			}
		};
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Biodata biodata = new Biodata();
		biodata.setNama("Jouzu");
		biodata.setEmail("test");
		biodata.setAddress("Test");
		
		this.biorepo.save(biodata);
	}	

}
