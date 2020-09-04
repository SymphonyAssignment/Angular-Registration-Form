package com.st.controller;

import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.st.dao.RegistrationDao;
import com.st.model.Candidate;

@Path("/")
public class RegistrationController {
	private RegistrationDao dao = new RegistrationDao();
	Date dateOne = new Date();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/candidate")

	public Candidate getCandidate(String email) throws ClassNotFoundException {
		Candidate c1 = new Candidate();
		String x = "rswain2705@gmail.com";
		c1 = dao.getCandidate(x);
		return c1;
	            	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/candpost")
	public int postCandidate(Candidate user) throws ClassNotFoundException {
		Candidate c = new Candidate();
		c.setName(user.getName());
		c.setPassword(user.getPassword());
		c.setCnfpassword(user.getCnfpassword());
		c.setEmail(user.getEmail());
		c.setDob(user.getDob());
		c.setGender(user.getGender());
		c.setPhone(user.getPhone());
		c.setEducation(user.getEducation());
		c.setTnc(user.isTnc());
		dao.postCandidate(c);
		return 1;
	}

}