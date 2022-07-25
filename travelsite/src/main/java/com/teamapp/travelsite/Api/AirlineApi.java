package com.teamapp.travelsite.Api;

import com.amadeus.Amadeus;
import com.amadeus.Response;
import com.amadeus.resources.*;
import com.teamapp.travelsite.AirlineBooking.AirlineVO;
import com.amadeus.resources.Destination;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Stream;

import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //임시 어노테이션 (테스트)
public class AirlineApi {
    private AirlineVO airlineVO = new AirlineVO();

    Amadeus amadeus = Amadeus
            .builder("vhvChPiYx8exfB5fukFn9CaIOmkBpZn2","19iGuJh25e7AGAin")
            .build();

    public HashMap<String, AirlineVO> airlineLookup(String arrival, String destination, String depart, String goback,String adult,String child) {

        HashMap<String,AirlineVO> airlineMap = new HashMap<String,AirlineVO>();
        //api 리스트 조회 구현


        return airlineMap;
    }



    //TESTLINE
    @GetMapping("/example")
    public Stream<Destination> airlinelookups() throws ResponseException {

        Params params = Params
                .with("airlineCode", "BA");

        // Run the query
        Destination[] destinations = amadeus.airline.destinations.get(params);

//        if (destinations.getResponse().getStatusCode() != 200) {
//            System.out.println("Wrong status code: " + destinations.getResponse().getStatusCode());
//            System.exit(-1);
//        }


        Arrays.stream(destinations)
                .map(Destination::getName)
                .forEach(System.out::println);

        return Arrays.stream(destinations);
    }
    @GetMapping("/airportloc")
    public Location airportloc() throws ResponseException {
        /// Get a specific city or airport based on its id
        Location location = amadeus.referenceData
                .location("ALHR").get();

        if(location.getResponse().getStatusCode() != 200) {
            System.out.println("Wrong status code: " + location.getResponse().getStatusCode());
            System.exit(-1);
        }

        System.out.println(location);
        return location;
    }

    @GetMapping("/ordertest")
    public Response ordertest() throws ResponseException {
        Traveler traveler = new Traveler();

        traveler.setId("1");
        traveler.setDateOfBirth("2000-04-14");
        traveler.setName(traveler.new Name("JORGE", "GONZALES"));

        Traveler.Phone[] phone = new Traveler.Phone[1];
        phone[0] = traveler.new Phone();
        phone[0].setCountryCallingCode("33");
        phone[0].setNumber("675426222");
        phone[0].setDeviceType("MOBILE");

        Traveler.Contact contact = traveler.new Contact();
        contact.setPhones(phone);
        traveler.setContact(contact);

        Traveler.Document[] document = new Traveler.Document[1];
        document[0] = traveler.new Document();
        document[0].setDocumentType("PASSPORT");
        document[0].setNumber("480080076");
        document[0].setExpiryDate("2022-10-11");
        document[0].setIssuanceCountry("ES");
        document[0].setNationality("ES");
        document[0].setHolder(true);
        traveler.setDocuments(document);

        Traveler[] travelerArray = new Traveler[1];
        travelerArray[0] = traveler;
        System.out.println(travelerArray[0]);

        FlightOfferSearch[] flightOffersSearches = amadeus.shopping.flightOffersSearch.get(
                Params.with("originLocationCode", "PAR")
                        .and("destinationLocationCode", "NYC")
                        .and("departureDate", "2022-11-01")
                        .and("returnDate", "2022-11-08")
                        .and("adults", 1)
                        .and("max", 3));


        // We price the 2nd flight of the list to confirm the price and the availability
        FlightPrice flightPricing = amadeus.shopping.flightOffersSearch.pricing.post(
                flightOffersSearches[1]);

        // We book the flight previously priced
        FlightOrder order = amadeus.booking.flightOrders.post(flightPricing, travelerArray);
        System.out.println(order.getResponse());



        // Return CO2 Emission of the previously booked flight
        int weight = order.getFlightOffers()[0].getItineraries(
        )[0].getSegments()[0].getCo2Emissions()[0].getWeight();
        String unit = order.getFlightOffers()[0].getItineraries(
        )[0].getSegments()[0].getCo2Emissions()[0].getWeightUnit();

        return order.getResponse();
    }
}
