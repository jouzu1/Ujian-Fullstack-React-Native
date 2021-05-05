package com.perpus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.perpus.entity.Buku;
import com.perpus.repository.BukuRepository;

@SpringBootApplication
public class PerpustakaanBaruApplication implements CommandLineRunner{

	@Autowired
	BukuRepository bukurepo;
	public static void main(String[] args) {
		SpringApplication.run(PerpustakaanBaruApplication.class, args);
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
//		Buku buku = new Buku();
//		buku.setNamaBuku("Max Payne");
//		buku.setJumlahHalaman(255);
//		buku.setNamaPenulis("Jouzu");
//		
//		this.bukurepo.save(buku);
	}	

}
