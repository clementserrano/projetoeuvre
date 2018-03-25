package com.epul.projetoeuvre.controller;

import com.epul.projetoeuvre.dao.ReservationRepository;
import com.epul.projetoeuvre.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by clementserrano on 25/03/2018.
 */
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public void add(Reservation reservation) {
        reservationRepository.save(reservation);
    }
}
