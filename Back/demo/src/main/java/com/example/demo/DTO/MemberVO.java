package com.example.demo.DTO;

public class MemberVO {

    private String name;
    private String id;
    private String pw;
    private String nickname;
    private String address;
    private String num;


	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return this.pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getNickname() {
		return this.nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNum() {
		return this.num;
	}

	public void setNum(String num) {
		this.num = num;
	}

    @Override
    public String toString(){
        return "MemberVO [name=" + name + ", id=" + id + ", pw=" + pw + ", nickname="
        + nickname +  ", address="+ address + ", num=" + num + "]";
    }
    
}
