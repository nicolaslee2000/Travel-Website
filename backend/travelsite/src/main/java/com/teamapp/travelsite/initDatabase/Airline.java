package com.teamapp.travelsite.initDatabase;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
public class Airline {

	@Id
	@Column(nullable = false)
	private String airline_iatacode;

	@Column(nullable = false)
	private String airline_name;

	@JsonSerialize(using= ByteArraySerializer.class)
	@Column(nullable = true)
	private byte[] airline_logo;

}
