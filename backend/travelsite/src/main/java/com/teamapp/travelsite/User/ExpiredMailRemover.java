package com.teamapp.travelsite.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.teamapp.travelsite.Model.Repository.TempMailRepository;

@Component
public class ExpiredMailRemover {
	
	@Autowired
	TempMailRepository tempMailRepository;
	

//	@Scheduled(cron = "0/10 * * * * *")	//보여주기용 10초
	@Scheduled(cron = "0 0/1 * * * *")	//1분 마다 쿼리 날림
	public void searchExpiredMail() {
		if(tempMailRepository.searchExpiredMail() != null) {
//			System.out.println(tempMailRepository.searchExpiredMail());
			long[] arr = tempMailRepository.searchExpiredMail(); 
			
			for (int i = 0; i < arr.length; i++) {
			tempMailRepository.deleteById(arr[i]);
			}
		}
	}
}
