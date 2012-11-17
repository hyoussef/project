package data.model.def;

import javax.xml.bind.annotation.XmlElement;

public interface IContact {

	@XmlElement
	public long getId();

	public void setId(long id);
	
	@XmlElement(name="first_name")	
	public String getFirstName();
	void setFirstName(String name);
	
	@XmlElement(name="last_name")	
	public String getLastName();
	public void setLastName(String name);
	
	@XmlElement(name="mobile")
	public String getMobileNum();
	public void setMobileNum(String mblNum);
	
	@XmlElement(name="email")
	public String getEmail();
	public void setEmail(String email);
}
