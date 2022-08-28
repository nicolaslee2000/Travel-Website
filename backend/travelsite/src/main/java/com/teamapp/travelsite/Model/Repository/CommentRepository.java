package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
