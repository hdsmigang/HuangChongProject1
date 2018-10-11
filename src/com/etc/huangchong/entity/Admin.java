package com.etc.huangchong.entity;

public class Admin {
	private String adminName;
	private String adminPwd;
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getAdminPwd() {
		return adminPwd;
	}
	public void setAdminPwd(String adminPwd) {
		this.adminPwd = adminPwd;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(String adminName, String adminPwd) {
		super();
		this.adminName = adminName;
		this.adminPwd = adminPwd;
	}
	

}
