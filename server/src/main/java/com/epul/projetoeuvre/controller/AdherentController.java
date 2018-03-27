package com.epul.projetoeuvre.controller;

import com.epul.projetoeuvre.dao.AdherentRepository;
import com.epul.projetoeuvre.entity.Adherent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public Adherent add(@RequestBody Adherent adherent) {
        return adherentRepository.save(adherent);
    }
}
