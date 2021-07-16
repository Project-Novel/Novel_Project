package com.example.demo.DAO;

import javax.inject.Inject;

import com.example.demo.DTO.MemberVO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class MemberdaoImpl implements MemberDAO{

    @Inject
	SqlSession sql;
	// 회원가입

	@Override
	public void register(MemberVO vo) throws Exception {
		sql.insert("memberMapper.register", vo);
		
	}
    
}
