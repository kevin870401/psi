package com.psi.core.model;

import java.util.Date;

public class Vip implements java.io.Serializable {

	private Long vipId;
	private String name;
	private String address;
	private String phone="aa";
	private String email="bb";
	private Date createdDate;
	public Vip() {
	}

	public Vip(String name, String address, Date createdDate) {
		this.name = name;
		this.address = address;
		this.createdDate = createdDate;
		this.phone="cons";
		this.email="cons";
	}

	public Long getVipId() {
		return this.vipId;
	}

	public void setVipId(Long vipId) {
		this.vipId = vipId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
