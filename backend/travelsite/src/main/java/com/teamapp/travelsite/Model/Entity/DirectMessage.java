package com.teamapp.travelsite.Model.Entity;

import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Comparator;
import java.util.Date;

@Entity
@Getter
@Table(name = "DIRECTMESSAGE")
public class DirectMessage implements Comparator<DirectMessage> {

    @Id
    @GeneratedValue
    private Long dmId;

    @ManyToOne
    @JoinColumn(name = "creator")
    private User creator;

    @ManyToOne
    @JoinColumn(name = "receiver")
    private User receiver;

    Timestamp writeTime;

    String content;

    @Override
    public int compare(DirectMessage c1, DirectMessage c2) { // compare method for sort Chatting
        long l1 = c1.getWriteTime().getTime();
        long l2 = c2.getWriteTime().getTime();

        if(l1 > l2)
            return 1;
        else
            return -1;
    }

}
