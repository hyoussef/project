package data.model.dto;

import javax.xml.bind.annotation.XmlElement;

import data.model.def.IContact;

public class ContactDTO implements IContact {

	private long id;
	private String firstName;
	private String lastName;
	private String mobileNum;
	private String email;
	
	@Override
	@XmlElement
	public long getId() {
		return id;
	}

	@Override
	public void setId(long id) {
		this.id = id;

	}

	@Override
	@XmlElement(name = "first_name")
	public String getFirstName() {
		return this.firstName;
	}

	@Override
	public void setFirstName(String name) {
		this.firstName = name;

	}

	@Override
	@XmlElement(name = "last_name")
	public String getLastName() {
		return this.lastName;
	}

	@Override
	public void setLastName(String name) {
		this.lastName = name;
	}

	@Override
	@XmlElement(name = "mobile")
	public String getMobileNum() {
		return mobileNum;
	}

	@Override
	public void setMobileNum(String mblNum) {
		this.mobileNum = mblNum;
	}

	@Override
	@XmlElement(name = "email")
	public String getEmail() {
		return this.email;
	}

	@Override
	public void setEmail(String email) {
		this.email = email;
	}

}
