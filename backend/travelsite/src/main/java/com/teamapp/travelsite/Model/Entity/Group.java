package com.teamapp.travelsite.Model.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamapp.travelsite.Model.Entity.ForJoinTable.GroupWithMember;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@Table(name = "GROUP")
public class Group implements Serializable {
    @Id
    private Long groupId;

    private String groupName;

    @Column(insertable = false, updatable = false)
    private String groupMembers; //fk target, if you search username please JOIN by this.

    private String groupDescribe;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "YYYY-MM-DD")
    private Date creationDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "groupMembers")
    private GroupWithMember groupMember;

    @OneToOne(mappedBy = "group", cascade = CascadeType.ALL)
    private GroupBoard groupBoard;

    @OneToOne(mappedBy = "group", cascade = CascadeType.ALL)
    private GroupChatRoom groupChatRoom;

}
