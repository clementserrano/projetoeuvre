package com.epul.projetoeuvre.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by clementserrano on 24/03/2018.
 */
@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Adherent {
    @Id @GeneratedValue
    private Long idAdherent;
    private String nomAdherent;
    private String prenomAdherent;
    private String villeAdherent;
}
