package com.st.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.st.model.Candidate;
import java.sql.PreparedStatement;

public class RegistrationDao {
	private static final String INSERT_USERS_SQL = "INSERT INTO users" + "  (name, password, cnfpassword, email, dob, gender, phone, education, terms) VALUES "
			+ " (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	private static final String QUERY = "select * from Users";
	private static final String SELECTID = "select * from Users where email = ?";
	public void postCandidate(Candidate user) throws ClassNotFoundException 
	{
		Class.forName("com.mysql.jdbc.Driver");
		try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/javadb?useSSL=false",
				"root", "password");
				Statement stmt = connection.createStatement();
				PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL);) {
				preparedStatement.setString(1, user.getName());
				preparedStatement.setString(2, user.getPassword());
				preparedStatement.setString(3, user.getCnfpassword());
				preparedStatement.setString(4, user.getEmail());
				preparedStatement.setDate(5, new java.sql.Date(System.currentTimeMillis()));
				preparedStatement.setString(6, user.getGender());
				preparedStatement.setString(7, user.getPhone());
				preparedStatement.setString(8, user.getEducation());
				preparedStatement.setBoolean(9, user.isTnc());
				System.out.println(preparedStatement);
				preparedStatement.executeUpdate();
	}
		catch (SQLException e) {
			e.printStackTrace();
		}

}
	public Candidate getCandidate(String email) throws ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		Candidate c= new Candidate();
		try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/javadb?useSSL=false",
				"root", "password");
				Statement stmt = connection.createStatement();
				PreparedStatement preparedStatement = connection.prepareStatement(SELECTID);) {
				preparedStatement.setString(1, email);
            	ResultSet rs = preparedStatement.executeQuery();
            	while (rs.next()) {
    				c.setName(rs.getString("name"));
    				c.setPassword(rs.getString("password"));
    				c.setCnfpassword(rs.getString("cnfpassword"));
    				c.setEmail(rs.getString("email"));
    				c.setDob(rs.getDate("dob"));
    				c.setPhone(rs.getString("phone"));
    				c.setEducation(rs.getString("education"));
    				c.setGender( rs.getString("gender"));
    				c.setTnc(rs.getBoolean("terms"));
            	}
		}
            	catch (SQLException e) {
        			e.printStackTrace();
        		}
    	return c;

	}
	

	}


	



