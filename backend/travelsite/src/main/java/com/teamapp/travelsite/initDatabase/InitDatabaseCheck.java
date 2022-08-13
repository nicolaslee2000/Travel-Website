package com.teamapp.travelsite.initDatabase;

import com.teamapp.travelsite.Config.InitDatabaseConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InitDatabaseCheck implements ApplicationListener<ContextRefreshedEvent>{
    @Autowired
    private final InitDatabaseConfig initDatabaseConfig;
    @Autowired
    private final ApplicationEventPublisher applicationEventPublisher;
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
         final CustomEventPublisher customEventPublisher = new CustomEventPublisher();
        if (initDatabaseConfig.isInitDatabaseSwitch() == true) {
         customEventPublisher.publish(initDatabaseConfig);
        }
    }

    //Event
    public class InitDatabaseEvent extends ApplicationEvent {
        private String message;
        public InitDatabaseEvent(Object source) {
            super(source);
        }
    }

    //EventPublisher
    public class CustomEventPublisher {
         InitDatabaseConfig initDatabaseConfig;
        public void publish(InitDatabaseConfig initDatabaseConfig) {
            this.initDatabaseConfig = initDatabaseConfig;
            applicationEventPublisher.publishEvent(new InitDatabaseEvent(initDatabaseConfig));
            }
        }

    }

