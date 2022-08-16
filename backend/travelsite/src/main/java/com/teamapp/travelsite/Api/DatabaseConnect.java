package com.teamapp.travelsite.Api;

import com.amadeus.resources.Traveler;
import com.amadeus.resources.Traveler.Document;
import com.amadeus.resources.Traveler.Name;
import com.amadeus.resources.Traveler.Phone;
import com.google.gson.JsonObject;
import com.amadeus.resources.Traveler.Contact;
import com.teamapp.travelsite.Model.DTOs.TravelerDTO;

public class DatabaseConnect {
	public static TravelerDTO traveler(JsonObject travelerInfo) {

		TravelerDTO traveler = new TravelerDTO();
		String id = travelerInfo.get("id").getAsString();
		
		String fname = travelerInfo.get("fname").getAsString();
		String lname = travelerInfo.get("lname").getAsString();
		String dateOfBirth = travelerInfo.get("dateOfBirth").getAsString();
		String gender = travelerInfo.get("gender").getAsString();
		
		String email = travelerInfo.get("email").getAsString();
//		Phone phone = traveler.new Phone();
//		String countryCode = travelerInfo.get("countryCode").getAsString();
//		String number = travelerInfo.get("phoneNumber").getAsString();
//		phone.setCountryCallingCode(countryCode);
//		phone.setNumber(number);
//		phone.setDeviceType("MOBILE");
//		Contact contact = traveler.new Contact();
//		Phone[] phones = { phone };
//		contact.setPhones(phones);
//		contact.setEmailAddress(email);
//		traveler.setContact(contact);
//		Name name = traveler.new Name(fname, lname);
//		traveler.setName(name);
//		traveler.setDateOfBirth(dateOfBirth);
//		traveler.setId(id);
//		traveler.setGender(gender);
//
//		String passportNumber = travelerInfo.get("passportNumber").getAsString();
//		String nationality = travelerInfo.get("nationality").getAsString();
//		String passportExpiryDate = travelerInfo.get("passportExpiryDate").getAsString();
//
//		Document document = traveler.new Document();
//		document.setDocumentType("PASSPORT");
//		document.setNumber(passportNumber);
//		document.setExpiryDate(passportExpiryDate);
//		document.setNationality(nationality);
//		document.setHolder(true);
//		document.setIssuanceCountry(nationality);
//		Document[] documents = { document };
//		traveler.setDocuments(documents);
		return traveler;
	}
}