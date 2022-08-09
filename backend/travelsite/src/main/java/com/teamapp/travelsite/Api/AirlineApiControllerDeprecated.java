package com.teamapp.travelsite.Api;

import com.amadeus.Amadeus;
import com.amadeus.resources.*;
import java.util.Arrays;

import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/test")
@Deprecated
/**
 * @deprecated ... Test Class
 * please use AmadeusConnect
 */
public class AirlineApiControllerDeprecated {

    Amadeus amadeus = Amadeus
            .builder("vhvChPiYx8exfB5fukFn9CaIOmkBpZn2","19iGuJh25e7AGAin")
            .build(); //API Injection

    @GetMapping("/goto") //항공사 행선지 표시
    @ResponseBody
    public Destination[] airlinelookups() throws ResponseException {

        Params params = Params
                .with("airlineCode", "BA");

        // Run the query
        Destination[] destinations = amadeus.airline.destinations.get(params);

//        if (destinations.getResponse().getStatusCode() != 200) {
//            System.out.println("Wrong status code: " + destinations.getResponse().getStatusCode());
//            System.exit(-1);
//        } //오류 검증 코드이지만 Throw 해두었음.


        Arrays.stream(destinations)
                .map(Destination::getName)
               .forEach(System.out::println);

        return destinations;
    }
    @ResponseBody
    @GetMapping("/airport") //공항정보 표시
    public Location airportloc() throws ResponseException {
        /// Get a specific city or airport based on its id
        Location location = amadeus.referenceData
                .location("ALHR").get(); //예제 런던 히드로 공항

        if(location.getResponse().getStatusCode() != 200) {
            System.out.println("Wrong status code: " + location.getResponse().getStatusCode());
            System.exit(-1);
        }

        System.out.println(location);
        return location;
    }

    @GetMapping("/lists") //조회 로직만 분리
    @ResponseBody
    public FlightOfferSearch[] showList() throws ResponseException{
        //고객정보에 따른 실질적 검색조건
        //객체에 파라미터 주입
        //예제 시드니 to 방콕
        FlightOfferSearch[] flightOffersSearches = amadeus.shopping.flightOffersSearch.get(
                Params.with("originLocationCode", "SYD")
                        .and("destinationLocationCode", "BKK")
                        .and("departureDate", "2022-11-01")
                        .and("returnDate", "2022-11-20")
                        .and("adults", 1)
                        .and("max", 250) //임의
                        .and("nonStop","false"));

        //그 뒤로 POST
        // We price the 2nd flight of the list to confirm the price and the availability
        FlightPrice flightPricing = amadeus.shopping.flightOffersSearch.pricing.post(
                flightOffersSearches[1]);
        return flightPricing.getFlightOffers();
    }

    //최종 구현 로직
    @GetMapping("/order")
    @ResponseBody
    public FlightOfferSearch[] ordertest() throws ResponseException {
        //차후 전략 :: traveler 객체를 상속받아 TravelerVO 으로 구현.
        Traveler traveler = new Traveler(); //여행자 생성 및 정보란

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

        //고객정보에 따른 실질적 검색조건
        //객체에 파라미터 주입
        //예제 시드니 to 방콕
        FlightOfferSearch[] flightOffersSearches = amadeus.shopping.flightOffersSearch.get(
                Params.with("originLocationCode", "SYD")
                        .and("destinationLocationCode", "BKK")
                        .and("departureDate", "2022-11-01")
                        .and("returnDate", "2022-11-20")
                        .and("adults", 1)
                        .and("max", 250)
                        .and("nonStop","false")); //nonstop :: 경유지 여부 false : 경유함

        //그 뒤로 POST
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

        return order.getFlightOffers();
    }
}
