package com.teamapp.travelsite.Api;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.Hotel;
import com.amadeus.resources.HotelOffer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hotel")
public class HotelApiController {
    Amadeus amadeus = Amadeus
            .builder("vhvChPiYx8exfB5fukFn9CaIOmkBpZn2","19iGuJh25e7AGAin")
            .build(); //API Injection

    //TESTLINE==================================================TESTLINE============================

    @GetMapping("/")
    @ResponseBody //이름으로 조회, 나중에 객체 받아서 POST으로 변경 예정
    public void showHotelLists() throws ResponseException {
        Hotel[] hotels = amadeus.referenceData.locations.hotels.byHotels.get(
                Params.with("hotelIds", "ARPARARA"));

        if (hotels[0].getResponse().getStatusCode() != 200) {
            System.out.println("Wrong status code: " + hotels[0].getResponse().getStatusCode());
            System.exit(-1);
        }

        System.out.println(hotels[0]);
    }


    @GetMapping("/book")
    @ResponseBody
    public void hotelBooking() throws ResponseException {
        HotelOffer[] hotelOfferSearches = amadeus.shopping.hotelOffers.get(
                Params.with("guests",1)


        );

    }
}
