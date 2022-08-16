package com.teamapp.travelsite.User.Security;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.teamapp.travelsite.Model.Repository.TempMailRepository;

@Component
public class ExpiredMailRemover {
	
	TempMailRepository tempMailRepository;
	
	@Scheduled
	public void ExpiredMailRemover() {
//		tempMailRepository.delete(tempMailRepository.fi);
	}
}
