package com.epul.projetoeuvre.controller;

import com.epul.projetoeuvre.dao.OeuvreventeRepository;
import com.epul.projetoeuvre.entity.Oeuvrevente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by clementserrano on 25/03/2018.
 */
@RestController
@RequestMapping("/oeuvrevente")
public class OeuvreventeController {
    @Autowired
    private OeuvreventeRepository oeuvreventeRepository;

    @GetMapping("/getAll")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Oeuvrevente> getAll() {
        return oeuvreventeRepository.findAll();
    }

    @GetMapping("/get/{idOeuvrevente}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Oeuvrevente get(@PathVariable Long idOeuvrevente) {
        return oeuvreventeRepository.getOne(idOeuvrevente);
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public void add(Oeuvrevente oeuvrevente) {
        oeuvreventeRepository.save(oeuvrevente);
    }
}
