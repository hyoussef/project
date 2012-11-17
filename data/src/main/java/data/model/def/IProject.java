package data.model.def;

import java.util.Date;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

public interface IProject {

	@XmlElement(name = "name")
	public abstract String getName();
	public abstract void setName(String name);

	@XmlElement(name = "id")
	public abstract long getId();
	public abstract void setId(long id);

	@XmlElement(name = "desc")
	public abstract String getDescription();
	public abstract void setDescription(String description);

	@XmlElement(name = "fromCompany")
	ICompany getCompany();
	void setCompany(ICompany company);

	@XmlElement(name="StartingAt")
	Date getStartDate();
	void setStartDate(Date startDate);

	@XmlElement(name="EndingAt")
	Date getEndDate();
	void setEndDate(Date endDate);
	
	@XmlElement(name="fromEntity")
	IEntity getEntity();
	void setEntity(IEntity entity);
	
	@XmlElement(name="contacts")
	List<IContact> getContacts();
	void setContacts(List<IContact> contacts);
	

}