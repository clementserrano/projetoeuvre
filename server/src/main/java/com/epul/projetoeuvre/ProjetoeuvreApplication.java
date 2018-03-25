package com.epul.projetoeuvre;

import com.epul.projetoeuvre.repository.AdherentRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProjetoeuvreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoeuvreApplication.class, args);
	}

}
