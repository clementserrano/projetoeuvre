package com.epul.projetoeuvre.controller;

import com.epul.projetoeuvre.entity.Adherent;
import com.epul.projetoeuvre.repository.AdherentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by clementserrano on 24/03/2018.
 */
@RestController
@RequestMapping("/adherent")
public class AdherentController {

    @Autowired
    private AdherentRepository adherentRepository;

    @GetMapping("/getAll")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Adherent> getAll() {
        return adherentRepository.findAll();
    }
}