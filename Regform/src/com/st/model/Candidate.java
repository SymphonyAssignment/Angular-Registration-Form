package com.st.model;

import java.io.Serializable;
import java.util.Date;

public class Candidate implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 8765444692797260726L;
	private String name;
	private String password;
	private String cnfpassword;
	private String email;
	private Date dob;
	private String gender;
	private String phone;
	private String education;

	private boolean tnc;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCnfpassword() {
		return cnfpassword;
	}

	public void setCnfpassword(String cnfpassword) {
		this.cnfpassword = cnfpassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	
	public boolean isTnc() {
		return tnc;
	}

	public void setTnc(boolean tnc) {
		this.tnc = tnc;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}
}