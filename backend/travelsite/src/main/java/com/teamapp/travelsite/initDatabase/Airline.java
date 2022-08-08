package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ByteArraySerializer;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

//@Entity

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "AIRLINE")
public class Airline {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int airl_idx;

	@Column(nullable = false)
	private String airline_iatacode;

	@Column(nullable = false)
	private String airline_name;

//	@JsonSerialize(using= ByteArraySerializer.class)
//	@Column(nullable = true)
//	private byte[] airline_logo;
}
