package com.example.demo.MemberService;


import javax.inject.Inject;

import com.example.demo.DAO.MemberDAO;
import com.example.demo.DTO.MemberVO;

import org.springframework.stereotype.Service;



@Service
public class MemberServiceImpl implements MemberService {
	
	@Inject MemberDAO dao;
	
	@Override
	public void register(MemberVO vo) throws Exception {
		
		dao.register(vo);
		
	}
}