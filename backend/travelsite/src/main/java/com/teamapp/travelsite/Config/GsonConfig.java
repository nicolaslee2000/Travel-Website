package com.teamapp.travelsite.Config;

import com.google.gson.*;

import de.codecentric.boot.admin.client.config.SpringBootAdminClientAutoConfiguration;
import io.swagger.v3.core.util.Json;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



import java.lang.reflect.Type;

@Configuration
public class GsonConfig {

    @Bean
    public Gson gson() {
        return new GsonBuilder()
                //.registerTypeAdapter(Json.class, new SpringBootAdminClientAutoConfiguration())
                // needed for making calls to /v2/api-docs
                .create();
    }

}